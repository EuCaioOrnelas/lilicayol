
-- Criar tabela para produtos
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  colors TEXT[] NOT NULL DEFAULT '{}',
  sizes TEXT[] NOT NULL DEFAULT '{}',
  image_url TEXT NOT NULL,
  button_link TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS na tabela products
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Criar política que permite que todos vejam os produtos (para o site público)
CREATE POLICY "Produtos são públicos para visualização" 
  ON public.products 
  FOR SELECT 
  USING (true);

-- Criar política que permite apenas administradores autenticados gerenciarem produtos
CREATE POLICY "Apenas administradores podem gerenciar produtos" 
  ON public.products 
  FOR ALL 
  USING (auth.email() = 'Adminlilicayol@gmail.com');

-- Criar bucket para armazenar imagens dos produtos
INSERT INTO storage.buckets (id, name, public) 
VALUES ('product-images', 'product-images', true);

-- Criar política para permitir upload de imagens apenas para admin
CREATE POLICY "Admin pode fazer upload de imagens"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'product-images' AND 
  auth.email() = 'Adminlilicayol@gmail.com'
);

-- Criar política para permitir visualização pública das imagens
CREATE POLICY "Imagens são públicas para visualização"
ON storage.objects
FOR SELECT
USING (bucket_id = 'product-images');

-- Criar política para permitir admin deletar imagens
CREATE POLICY "Admin pode deletar imagens"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'product-images' AND 
  auth.email() = 'Adminlilicayol@gmail.com'
);
