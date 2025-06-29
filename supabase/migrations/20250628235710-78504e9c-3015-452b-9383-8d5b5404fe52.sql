
-- Criar tabela para categorias
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Inserir algumas categorias padrão
INSERT INTO public.categories (name, description) VALUES
  ('Roupas Femininas', 'Vestuário feminino em geral'),
  ('Acessórios', 'Acessórios variados'),
  ('Bolsas', 'Bolsas e carteiras'),
  ('Calçados', 'Sapatos e sandálias'),
  ('Joias', 'Joias e bijuterias'),
  ('Moda Praia', 'Roupas de banho e praia'),
  ('Lingerie', 'Roupas íntimas'),
  ('Esportivo', 'Roupas e acessórios esportivos'),
  ('Casual', 'Roupas casuais'),
  ('Festa', 'Roupas para ocasiões especiais');

-- Adicionar foreign key para relacionar produtos com categorias
ALTER TABLE public.products 
DROP COLUMN IF EXISTS category;

ALTER TABLE public.products 
ADD COLUMN category_id UUID REFERENCES public.categories(id);

-- Comentário: category_id pode ser NULL (produto sem categoria) ou referenciar uma categoria válida
