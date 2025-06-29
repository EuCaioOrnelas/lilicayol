
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import ConfirmationDialog from './ConfirmationDialog';

interface Category {
  id: string;
  name: string;
  description: string | null;
  image_url: string | null;
  created_at: string;
  updated_at: string;
}

const CategoryManagement = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [confirmDialog, setConfirmDialog] = useState<{
    open: boolean;
    categoryId: string | null;
    categoryName: string;
  }>({
    open: false,
    categoryId: null,
    categoryName: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    // Filtrar categorias com base no termo de pesquisa
    if (searchTerm.trim() === '') {
      setFilteredCategories(categories);
    } else {
      const filtered = categories.filter(category =>
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (category.description && category.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredCategories(filtered);
    }
  }, [searchTerm, categories]);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name', { ascending: true });

      if (error) {
        console.error('Erro ao buscar categorias:', error);
        toast({
          title: "Erro",
          description: "Erro ao carregar categorias.",
          variant: "destructive",
        });
        return;
      }

      setCategories(data || []);
    } catch (error) {
      console.error('Erro ao buscar categorias:', error);
      toast({
        title: "Erro",
        description: "Erro ao carregar categorias.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySaved = () => {
    fetchCategories();
    setShowForm(false);
    setEditingCategory(null);
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setShowForm(true);
  };

  const handleDeleteClick = (categoryId: string, categoryName: string) => {
    setConfirmDialog({
      open: true,
      categoryId,
      categoryName
    });
  };

  const handleDeleteConfirm = async () => {
    if (!confirmDialog.categoryId) return;

    try {
      const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', confirmDialog.categoryId);

      if (error) {
        console.error('Erro ao excluir categoria:', error);
        toast({
          title: "Erro",
          description: "Erro ao excluir categoria.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Sucesso",
        description: "Categoria excluída com sucesso!",
      });

      fetchCategories();
    } catch (error) {
      console.error('Erro ao excluir categoria:', error);
      toast({
        title: "Erro",
        description: "Erro ao excluir categoria.",
        variant: "destructive",
      });
    } finally {
      setConfirmDialog({
        open: false,
        categoryId: null,
        categoryName: ''
      });
    }
  };

  const handleDeleteCancel = () => {
    setConfirmDialog({
      open: false,
      categoryId: null,
      categoryName: ''
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
              {editingCategory ? 'Editar Categoria' : 'Nova Categoria'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CategoryForm
              category={editingCategory}
              onSave={handleCategorySaved}
              onCancel={() => {
                setShowForm(false);
                setEditingCategory(null);
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
              Adicionar Categoria
            </Button>

            <div className="relative w-full sm:w-80">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Pesquisar categorias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {searchTerm && (
            <div className="mb-4">
              <p className="text-lilicayol-gray">
                {filteredCategories.length === 0 
                  ? 'Nenhuma categoria encontrada para a pesquisa'
                  : `${filteredCategories.length} categoria${filteredCategories.length !== 1 ? 's' : ''} encontrada${filteredCategories.length !== 1 ? 's' : ''}`
                }
              </p>
            </div>
          )}

          <CategoryList
            categories={filteredCategories}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
          />
        </>
      )}

      <ConfirmationDialog
        open={confirmDialog.open}
        onOpenChange={handleDeleteCancel}
        title="Excluir Categoria"
        description={`Tem certeza que deseja excluir a categoria "${confirmDialog.categoryName}"? Produtos associados a ela ficarão sem categoria. Esta ação não pode ser desfeita.`}
        confirmText="Excluir"
        cancelText="Cancelar"
        onConfirm={handleDeleteConfirm}
        variant="destructive"
      />
    </div>
  );
};

export default CategoryManagement;
