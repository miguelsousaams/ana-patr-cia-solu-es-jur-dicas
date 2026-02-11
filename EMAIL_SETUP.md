# Email Setup - Formspree

## Overview
The contact form uses **Formspree** to send emails. 

**Vantagens:**
- ✅ Sem registo necessário
- ✅ Sem configuração de variáveis de ambiente
- ✅ Grátis para sempre
- ✅ Funciona imediatamente

## How It Works

1. O formulário envia dados via POST para: `https://formspree.io/f/xggbvbxk`
2. Formspree recebe o email da primeira submissão e ativa o formulário
3. Todos os emails enviados pelo formulário chegam ao seu email cadastrado no Formspree

## Setup (Muito Simples!)

**Opção 1: Setup Automático (Recomendado)**
1. Teste o formulário no seu site
2. Após a primeira submissão, Formspree enviará um email de confirmação
3. Clique no link de confirmação
4. Pronto! Todos os futuros emails serão recebidos

**Opção 2: Setup Manual**
1. Aceda a: https://formspree.io
2. Crie uma conta (rápido e grátis)
3. O seu form ID `xggbvbxk` já estará registado após a primeira submissão
4. Gerencie todas as submissões no dashboard

## Testing
```bash
npm run dev
```
- Preencha e envie o formulário
- Verifique o seu email para confirmação

## Important Notes
- Formspree cria o formulário automaticamente na primeira submissão
- O limite gratuito é suficiente para a maioria dos sites
- Pode ver todas as submissões em: https://formspree.io
- Não precisa de nenhuma alteração no código para funcionar

## Se Quiser Trocar o Email
Para receber os emails noutro endereço:
1. Aceda a https://formspree.io
2. Configure as definições na sua conta
3. OU modifique o form ID em `src/components/ContactForm.tsx` (linha com `https://formspree.io/f/...`)
