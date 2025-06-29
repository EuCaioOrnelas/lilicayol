
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Tag } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

interface CategoryListProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (categoryId: string, categoryName: string) => void;
}

const CategoryList = ({ categories, onEdit, onDelete }: CategoryListProps) => {
  if (categories.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-lilicayol-gray">Nenhuma categoria cadastrada ainda.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category) => (
        <Card key={category.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Tag size={18} className="text-lilicayol-beige" />
                <h3 className="font-cormorant font-semibold text-lg text-lilicayol-black">
                  {category.name}
                </h3>
              </div>
            </div>
            
            {category.description && (
              <p className="text-lilicayol-gray text-sm mb-4 line-clamp-2">
                {category.description}
              </p>
            )}

            <div className="flex gap-2">
              <Button
                onClick={() => onEdit(category)}
                size="sm"
                variant="outline"
                className="flex-1 flex items-center gap-2"
              >
                <Edit size={14} />
                Editar
              </Button>
              <Button
                onClick={() => onDelete(category.id, category.name)}
                size="sm"
                variant="destructive"
                className="flex-1 flex items-center gap-2"
              >
                <Trash2 size={14} />
                Excluir
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CategoryList;
