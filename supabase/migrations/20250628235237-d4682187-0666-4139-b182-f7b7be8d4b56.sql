
-- Adicionar campo de categoria na tabela products
ALTER TABLE public.products 
ADD COLUMN category TEXT;

-- Comentário: category pode ser NULL (sem categoria definida) ou uma string com a categoria do produto
