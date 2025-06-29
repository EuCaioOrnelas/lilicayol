
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Upload, X } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
}

interface CategoryFormProps {
  category?: Category | null;
  onSave: () => void;
  onCancel: () => void;
}

const CategoryForm = ({ category, onSave, onCancel }: CategoryFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name,
        description: category.description || '',
      });
      setImagePreview(category.image_url || '');
    }
  }, [category]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `category-${Date.now()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('product-images')
      .upload(fileName, file);

    if (error) {
      throw error;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('product-images')
      .getPublicUrl(fileName);

    return publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = category?.image_url || null;

      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      const categoryData = {
        name: formData.name.trim(),
        description: formData.description.trim() || null,
        image_url: imageUrl,
        updated_at: new Date().toISOString(),
      };

      let error;

      if (category) {
        const { error: updateError } = await supabase
          .from('categories')
          .update(categoryData)
          .eq('id', category.id);
        error = updateError;
      } else {
        const { error: insertError } = await supabase
          .from('categories')
          .insert([categoryData]);
        error = insertError;
      }

      if (error) {
        console.error('Erro ao salvar categoria:', error);
        toast({
          title: "Erro",
          description: error.message || "Erro ao salvar categoria.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Sucesso",
        description: `Categoria ${category ? 'atualizada' : 'criada'} com sucesso!`,
      });

      onSave();
    } catch (error) {
      console.error('Erro ao salvar categoria:', error);
      toast({
        title: "Erro",
        description: "Erro ao salvar categoria.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-lilicayol-black mb-2">
          Nome da Categoria
        </label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          placeholder="Digite o nome da categoria"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-lilicayol-black mb-2">
          Descrição (opcional)
        </label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Digite uma descrição para a categoria"
          rows={3}
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-lilicayol-black mb-2">
          Imagem da Categoria (opcional)
        </label>
        <div className="space-y-4">
          {imagePreview && (
            <div className="relative inline-block">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={() => {
                  setImagePreview('');
                  setImageFile(null);
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <X size={16} />
              </button>
            </div>
          )}
          <div className="flex items-center gap-4">
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="flex-1"
            />
            <Upload size={20} className="text-lilicayol-beige" />
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={loading}
          className="bg-lilicayol-beige hover:bg-lilicayol-beige-dark text-white"
        >
          {loading ? 'Salvando...' : (category ? 'Atualizar' : 'Criar')} Categoria
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

export default CategoryForm;
