
-- Adicionar campo de quantidade na tabela products
ALTER TABLE public.products 
ADD COLUMN quantity INTEGER;

-- Comentário: quantity pode ser NULL (sem quantidade definida) ou um número específico
