# 🚀 Guia de Deploy no Vercel

Este guia irá te ajudar a fazer o deploy do seu portfólio no Vercel de forma rápida e eficiente.

## 📋 Pré-requisitos

1. **Conta no GitHub**: Para conectar o repositório
2. **Conta no Vercel**: [vercel.com](https://vercel.com)
3. **Repositório no GitHub**: Com o código do portfólio

## 🔧 Passo a Passo

### 1. Preparar o Repositório

Certifique-se de que seu código está no GitHub:

```bash
# Se ainda não inicializou o git
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/seu-usuario/portfolio.git
git push -u origin main
```

### 2. Conectar ao Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Selecione o repositório do portfólio
5. O Vercel detectará automaticamente que é um projeto Next.js

### 3. Configurações do Projeto

O Vercel deve detectar automaticamente as configurações corretas:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 4. Variáveis de Ambiente (Opcional)

Se você planeja adicionar funcionalidades como formulário de contato, adicione as variáveis necessárias:

```bash
# Exemplo para EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

### 5. Deploy

1. Clique em "Deploy"
2. Aguarde o processo de build (geralmente 1-2 minutos)
3. Seu site estará disponível em `https://seu-projeto.vercel.app`

## 🔄 Deploy Automático

Após o primeiro deploy, qualquer push para a branch `main` irá automaticamente:

1. Disparar um novo build
2. Fazer deploy das mudanças
3. Atualizar o site em produção

## 🌐 Domínio Personalizado

Para usar um domínio personalizado:

1. Vá para as configurações do projeto no Vercel
2. Clique em "Domains"
3. Adicione seu domínio
4. Configure os registros DNS conforme instruído

### Exemplo de configuração DNS:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📊 Analytics (Opcional)

Para adicionar analytics ao seu site:

### Vercel Analytics
1. Vá para as configurações do projeto
2. Ative "Vercel Analytics"
3. Adicione o script no seu layout:

```tsx
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Google Analytics
1. Crie uma conta no Google Analytics
2. Adicione o ID de rastreamento nas variáveis de ambiente
3. Implemente o script de tracking

## 🔍 SEO e Performance

O projeto já está otimizado para:

- ✅ SEO básico com metadados
- ✅ Performance com Next.js
- ✅ Responsividade
- ✅ Acessibilidade básica

### Melhorias adicionais:

1. **Sitemap**: Adicione um sitemap.xml
2. **Robots.txt**: Configure o arquivo robots.txt
3. **Open Graph**: Imagens personalizadas para redes sociais
4. **Schema.org**: Marcação estruturada

## 🛠️ Troubleshooting

### Erro de Build
Se o build falhar:

1. Verifique os logs no Vercel
2. Teste localmente com `npm run build`
3. Verifique se todas as dependências estão no `package.json`

### Problemas de Performance
Se o site estiver lento:

1. Otimize as imagens
2. Use lazy loading
3. Implemente cache adequado
4. Verifique o bundle size

### Problemas de CSS
Se os estilos não carregarem:

1. Verifique se o Tailwind está configurado corretamente
2. Confirme se o `globals.css` está importado
3. Verifique se as classes estão sendo aplicadas

## 📱 Teste Pós-Deploy

Após o deploy, teste:

- [ ] Carregamento da página inicial
- [ ] Navegação entre seções
- [ ] Responsividade em diferentes dispositivos
- [ ] Formulário de contato (se implementado)
- [ ] Links externos
- [ ] Performance no PageSpeed Insights

## 🔄 Atualizações

Para atualizar o site:

1. Faça as mudanças no código
2. Commit e push para o GitHub
3. O Vercel fará deploy automático
4. Verifique se tudo está funcionando

## 📞 Suporte

Se encontrar problemas:

1. Verifique a [documentação do Vercel](https://vercel.com/docs)
2. Consulte os [fóruns do Next.js](https://github.com/vercel/next.js/discussions)
3. Abra uma issue no repositório do projeto

---

🎉 **Parabéns!** Seu portfólio está no ar e pronto para impressionar! 