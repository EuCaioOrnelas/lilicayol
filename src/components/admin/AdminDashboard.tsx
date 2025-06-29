import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Package, Tag, LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import CategoryManagement from './CategoryManagement';

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

interface AdminDashboardProps {
  onLogout: () => Promise<void>;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  const fetchProducts = async () => {
    setLoading(true);
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
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erro ao buscar produtos:', error);
        toast({
          title: "Erro",
          description: "Erro ao carregar produtos.",
          variant: "destructive",
        });
        return;
      }

      // Converter images de Json para ProductImage[]
      const processedProducts = (data || []).map(product => ({
        ...product,
        images: Array.isArray(product.images) ? product.images as unknown as ProductImage[] : null
      }));
      setProducts(processedProducts);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowProductForm(true);
  };

  const handleDeleteProduct = async (productId: string) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);

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
    }
  };

  const handleSaveProduct = () => {
    setShowProductForm(false);
    setEditingProduct(null);
    fetchProducts();
  };

  const handleCancelProduct = () => {
    setShowProductForm(false);
    setEditingProduct(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-playfair font-bold text-lilicayol-black mb-2">
            Painel Administrativo
          </h1>
          <p className="text-lilicayol-gray font-inter">
            Gerencie produtos e categorias da sua loja
          </p>
        </div>
        <Button
          onClick={onLogout}
          variant="outline"
          className="flex items-center gap-2"
        >
          <LogOut size={16} />
          Sair
        </Button>
      </div>

      <Tabs defaultValue="products" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="products" className="flex items-center gap-2">
            <Package size={16} />
            Produtos
          </TabsTrigger>
          <TabsTrigger value="categories" className="flex items-center gap-2">
            <Tag size={16} />
            Categorias
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-6">
          {showProductForm ? (
            <Card>
              <CardHeader>
                <CardTitle>
                  {editingProduct ? 'Editar Produto' : 'Novo Produto'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ProductForm
                  product={editingProduct}
                  onSave={handleSaveProduct}
                  onCancel={handleCancelProduct}
                />
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-cormorant font-semibold text-lilicayol-black">
                  Produtos
                </h2>
                <Button
                  onClick={() => setShowProductForm(true)}
                  className="bg-lilicayol-beige hover:bg-lilicayol-beige-dark text-white flex items-center gap-2"
                >
                  <Plus size={16} />
                  Novo Produto
                </Button>
              </div>

              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="text-lg text-lilicayol-gray">Carregando produtos...</div>
                </div>
              ) : (
                <ProductList
                  products={products}
                  onEdit={handleEditProduct}
                  onDelete={handleDeleteProduct}
                />
              )}
            </>
          )}
        </TabsContent>

        <TabsContent value="categories">
          <CategoryManagement />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
