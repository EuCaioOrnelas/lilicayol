import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import ConfirmationDialog from './ConfirmationDialog';

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
  created_at: string;
  updated_at: string;
  categories?: {
    id: string;
    name: string;
  } | null;
}

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean;
    productId: string | null;
    productName: string;
  }>({
    open: false,
    productId: null,
    productName: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.categories && product.categories.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          categories (
            id,
            name
          )
        `)
        .order('name', { ascending: true });

      if (error) {
        console.error('Erro ao buscar produtos:', error);
        toast({
          title: "Erro",
          description: "Erro ao carregar produtos.",
          variant: "destructive",
        });
        return;
      }

      // Convert the Json images to ProductImage[] format with proper type safety
      const processedProducts = (data || []).map(product => {
        let processedImages: ProductImage[] | null = null;
        
        if (product.images && Array.isArray(product.images)) {
          // Validate that each image has the required properties
          processedImages = product.images.filter((img: any) => 
            img && typeof img === 'object' && 
            typeof img.url === 'string' && 
            typeof img.alt === 'string'
          ).map((img: any) => ({
            url: img.url,
            alt: img.alt
          }));
        }
        
        return {
          ...product,
          images: processedImages
        };
      });

      setProducts(processedProducts);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar produtos.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleProductSaved = () => {
    fetchProducts();
    setShowForm(false);
    setEditingProduct(null);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDeleteClick = (productId: string, productName: string) => {
    setConfirmDialog({
      open: true,
      productId,
      productName
    });
  };

  const handleDeleteConfirm = async () => {
    if (!confirmDialog.productId) return;

    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', confirmDialog.productId);

      if (error) {
        console.error('Erro ao excluir produto:', error);
        toast({
          title: "Erro",
          description: "Erro ao excluir produto.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Sucesso",
        description: "Produto excluído com sucesso!",
      });

      fetchProducts();
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
      toast({
        title: "Erro",
        description: "Erro ao excluir produto.",
        variant: "destructive",
      });
    } finally {
      setConfirmDialog({
        open: false,
        productId: null,
        productName: ''
      });
    }
  };

  const handleDeleteCancel = () => {
    setConfirmDialog({
      open: false,
      productId: null,
      productName: ''
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-lilicayol-beige"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {showForm ? (
        <Card>
          <CardHeader>
            <CardTitle className="font-cormorant">
              {editingProduct ? 'Editar Produto' : 'Novo Produto'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ProductForm
              product={editingProduct}
              onSave={handleProductSaved}
              onCancel={() => {
                setShowForm(false);
                setEditingProduct(null);
              }}
            />
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <Button
              onClick={() => setShowForm(true)}
              className="bg-lilicayol-beige hover:bg-lilicayol-beige-dark text-white flex items-center gap-2"
            >
              <Plus size={16} />
              Adicionar Produto
            </Button>

            <div className="relative w-full sm:w-80">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Pesquisar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {searchTerm && (
            <div className="mb-4">
              <p className="text-lilicayol-gray">
                {filteredProducts.length === 0 
                  ? 'Nenhum produto encontrado para a pesquisa'
                  : `${filteredProducts.length} produto${filteredProducts.length !== 1 ? 's' : ''} encontrado${filteredProducts.length !== 1 ? 's' : ''}`
                }
              </p>
            </div>
          )}

          <ProductList
            products={filteredProducts}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
          />
        </>
      )}

      <ConfirmationDialog
        open={confirmDialog.open}
        onOpenChange={handleDeleteCancel}
        title="Excluir Produto"
        description={`Tem certeza que deseja excluir o produto "${confirmDialog.productName}"? Esta ação não pode ser desfeita.`}
        confirmText="Excluir"
        cancelText="Cancelar"
        onConfirm={handleDeleteConfirm}
        variant="destructive"
      />
    </div>
  );
};

export default ProductManagement;
