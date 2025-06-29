
-- Inserir o usuário administrador diretamente na tabela auth.users
-- Nota: Este é um método alternativo caso o painel do Supabase não esteja disponível
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'Adminlilicayol@gmail.com',
  crypt('Cayol135795.$', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '{"provider": "email", "providers": ["email"]}',
  '{}',
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);

-- Confirmar o email automaticamente
UPDATE auth.users 
SET email_confirmed_at = NOW()
WHERE email = 'Adminlilicayol@gmail.com';
