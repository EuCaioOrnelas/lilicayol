
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Upload, X, Plus } from 'lucide-react';

interface ProductImage {
  url: string;
  alt: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  colors: string[];
  sizes: string[];
  image_url: string;
  images: ProductImage[] | null;
  button_link: string;
  quantity?: number | null;
  category_id?: string | null;
}

interface Category {
  id: string;
  name: string;
}

interface ProductFormProps {
  product?: Product | null;
  onSave: () => void;
  onCancel: () => void;
}

const ProductForm = ({ product, onSave, onCancel }: ProductFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    colors: '',
    sizes: '',
    button_link: '',
    quantity: '',
    category_id: '',
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<ProductImage[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        colors: product.colors.join(', '),
        sizes: product.sizes.join(', '),
        button_link: product.button_link,
        quantity: product.quantity?.toString() || '',
        category_id: product.category_id || '',
      });
      
      // Configurar imagens existentes
      const productImages: ProductImage[] = [];
      
      if (product.images && Array.isArray(product.images)) {
        productImages.push(...product.images);
      } else if (product.image_url) {
        productImages.push({
          url: product.image_url,
          alt: product.name
        });
      }
      
      setExistingImages(productImages);
    }
  }, [product]);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('id, name')
        .order('name', { ascending: true });

      if (error) {
        console.error('Erro ao buscar categorias:', error);
        return;
      }

      setCategories(data || []);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const totalImages = existingImages.length + imageFiles.length + files.length;
    
    if (totalImages > 10) {
      toast({
        title: "Limite excedido",
        description: "Máximo de 10 imagens por produto.",
        variant: "destructive",
      });
      return;
    }

    setImageFiles(prev => [...prev, ...files]);
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreviews(prev => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeNewImage = (index: number) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const removeExistingImage = (index: number) => {
    setExistingImages(prev => prev.filter((_, i) => i !== index));
  };

  const uploadImages = async (files: File[]): Promise<ProductImage[]> => {
    const uploadPromises = files.map(async (file) => {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from('product-images')
        .upload(fileName, file);

      if (error) {
        throw error;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(fileName);

      return {
        url: publicUrl,
        alt: formData.name
      };
    });

    return Promise.all(uploadPromises);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let allImages: ProductImage[] = [...existingImages];

      // Upload das novas imagens
      if (imageFiles.length > 0) {
        const newImages = await uploadImages(imageFiles);
        allImages.push(...newImages);
      }

      if (allImages.length === 0) {
        toast({
          title: "Erro",
          description: "É necessário ter pelo menos uma imagem do produto.",
          variant: "destructive",
        });
        return;
      }

      const productData = {
        name: formData.name,
        description: formData.description,
        colors: formData.colors.split(',').map(c => c.trim()).filter(c => c),
        sizes: formData.sizes.split(',').map(s => s.trim()).filter(s => s),
        image_url: allImages[0].url, // Manter compatibilidade
        images: JSON.parse(JSON.stringify(allImages)), // Converter para Json
        button_link: formData.button_link,
        quantity: formData.quantity ? parseInt(formData.quantity) : null,
        category_id: formData.category_id || null,
        updated_at: new Date().toISOString(),
      };

      let error;

      if (product) {
        const { error: updateError } = await supabase
          .from('products')
          .update(productData)
          .eq('id', product.id);
        error = updateError;
      } else {
        const { error: insertError } = await supabase
          .from('products')
          .insert([productData]);
        error = insertError;
      }

      if (error) {
        console.error('Erro ao salvar produto:', error);
        toast({
          title: "Erro",
          description: "Erro ao salvar produto.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Sucesso",
        description: `Produto ${product ? 'atualizado' : 'criado'} com sucesso!`,
      });

      onSave();
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
      toast({
        title: "Erro",
        description: "Erro ao salvar produto.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const totalImages = existingImages.length + imageFiles.length;

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-lilicayol-black mb-2">
          Nome do Produto
        </label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          placeholder="Digite o nome do produto"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-lilicayol-black mb-2">
          Categoria
        </label>
        <Select value={formData.category_id} onValueChange={(value) => setFormData({ ...formData, category_id: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione uma categoria" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-lilicayol-black mb-2">
          Descrição
        </label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
          placeholder="Digite a descrição do produto"
          rows={4}
        />
      </div>

      <div>
        <label htmlFor="colors" className="block text-sm font-medium text-lilicayol-black mb-2">
          Cores (separadas por vírgula)
        </label>
        <Input
          id="colors"
          value={formData.colors}
          onChange={(e) => setFormData({ ...formData, colors: e.target.value })}
          required
          placeholder="Ex: Branco, Preto, Bege"
        />
      </div>

      <div>
        <label htmlFor="sizes" className="block text-sm font-medium text-lilicayol-black mb-2">
          Tamanhos (separados por vírgula)
        </label>
        <Input
          id="sizes"
          value={formData.sizes}
          onChange={(e) => setFormData({ ...formData, sizes: e.target.value })}
          required
          placeholder="Ex: P, M, G, GG"
        />
      </div>

      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-lilicayol-black mb-2">
          Quantidade em Estoque (deixe em branco se não houver controle)
        </label>
        <Input
          id="quantity"
          type="number"
          min="0"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          placeholder="Ex: 10"
        />
      </div>

      <div>
        <label htmlFor="button_link" className="block text-sm font-medium text-lilicayol-black mb-2">
          Link do Botão
        </label>
        <Input
          id="button_link"
          value={formData.button_link}
          onChange={(e) => setFormData({ ...formData, button_link: e.target.value })}
          required
          placeholder="https://wa.me/..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-lilicayol-black mb-2">
          Imagens do Produto ({totalImages}/10)
        </label>
        
        {/* Imagens existentes */}
        {existingImages.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-lilicayol-gray mb-2">Imagens atuais:</p>
            <div className="flex flex-wrap gap-2">
              {existingImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={() => removeExistingImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Novas imagens */}
        {imagePreviews.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-lilicayol-gray mb-2">Novas imagens:</p>
            <div className="flex flex-wrap gap-2">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={() => removeNewImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Input para adicionar imagens */}
        {totalImages < 10 && (
          <div className="flex items-center gap-4">
            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="flex-1"
            />
            <div className="flex items-center gap-2 text-lilicayol-beige">
              <Plus size={16} />
              <Upload size={16} />
            </div>
          </div>
        )}
        
        <p className="text-xs text-lilicayol-gray mt-2">
          Você pode adicionar até 10 imagens. A primeira imagem será usada como capa.
        </p>
      </div>

      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={loading}
          className="bg-lilicayol-beige hover:bg-lilicayol-beige-dark text-white"
        >
          {loading ? 'Salvando...' : (product ? 'Atualizar' : 'Criar')} Produto
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
