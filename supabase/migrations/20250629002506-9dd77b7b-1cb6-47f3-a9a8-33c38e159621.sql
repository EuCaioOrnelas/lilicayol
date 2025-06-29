
-- Adicionar campo de imagem para categorias
ALTER TABLE public.categories 
ADD COLUMN image_url TEXT;

-- Adicionar campo para múltiplas imagens dos produtos
ALTER TABLE public.products 
ADD COLUMN images JSONB DEFAULT '[]'::jsonb;

-- Migrar imagens existentes dos produtos para o novo formato
UPDATE public.products 
SET images = jsonb_build_array(jsonb_build_object('url', image_url, 'alt', name))
WHERE image_url IS NOT NULL AND image_url != '';

-- Comentário: O campo images armazenará um array de objetos com url e alt text
-- O campo image_url será mantido por compatibilidade, mas images será usado como principal
