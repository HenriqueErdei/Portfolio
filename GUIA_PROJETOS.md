# 🚀 Guia Completo - Como Alterar e Criar Projetos

## 📁 Arquivo Principal

Todos os projetos estão definidos no arquivo: `src/components/Projects.tsx`

## 🏗️ Estrutura de um Projeto

Cada projeto segue esta estrutura:

```typescript
{
  title: "Nome do Projeto",
  description: "Descrição detalhada do projeto",
  technologies: ["React", "Node.js", "TypeScript"],
  image: "/api/placeholder/400/250",
  github: "https://github.com/seu-usuario/projeto",
  live: "https://projeto.vercel.app",
  featured: true // ou false
}
```

### 📋 Campos Explicados:

- **`title`**: Nome do projeto (aparece como título)
- **`description`**: Descrição detalhada (2-3 linhas)
- **`technologies`**: Array com as tecnologias usadas
- **`image`**: URL da imagem (atualmente usando placeholder)
- **`github`**: Link para o repositório no GitHub
- **`live`**: Link para o projeto online
- **`featured`**: `true` = aparece em destaque, `false` = aparece na grade geral

## ✏️ Como Editar Projetos Existentes

### 1. Alterar Informações Básicas

```typescript
{
  title: "Meu Projeto Real", // ← Altere aqui
  description: "Descrição do seu projeto real...", // ← Altere aqui
  technologies: ["React", "Node.js", "Seu Projeto"], // ← Altere aqui
  github: "https://github.com/SEU-USUARIO/SEU-PROJETO", // ← Altere aqui
  live: "https://seu-projeto.vercel.app", // ← Altere aqui
  featured: true // ← true = destaque, false = grade normal
}
```

### 2. Exemplo Prático

```typescript
{
  title: "Sistema de Gestão Escolar",
  description: "Sistema completo para gerenciar alunos, professores e notas. Inclui dashboard administrativo, relatórios e notificações automáticas.",
  technologies: ["React", "Node.js", "PostgreSQL", "JWT"],
  image: "/api/placeholder/400/250",
  github: "https://github.com/henrique/sistema-escolar",
  live: "https://sistema-escolar.vercel.app",
  featured: true
}
```

## ➕ Como Adicionar Novos Projetos

### 1. Adicionar no Array

Adicione um novo objeto no array `projects`:

```typescript
const projects = [
  // ... projetos existentes ...
  {
    title: "Novo Projeto",
    description: "Descrição do novo projeto",
    technologies: ["React", "TypeScript", "Tailwind"],
    image: "/api/placeholder/400/250",
    github: "https://github.com/seu-usuario/novo-projeto",
    live: "https://novo-projeto.vercel.app",
    featured: false
  }
];
```

### 2. Exemplo de Novo Projeto

```typescript
{
  title: "App de Delivery",
  description: "Aplicação completa de delivery com geolocalização, pagamentos e sistema de avaliações. Desenvolvido para restaurantes e clientes.",
  technologies: ["React Native", "Firebase", "Stripe", "Maps API"],
  image: "/api/placeholder/400/250",
  github: "https://github.com/henrique/delivery-app",
  live: "https://expo.dev/@henrique/delivery-app",
  featured: true
}
```

## 🎯 Dicas para Projetos Impressionantes

### 1. Descrições Atraentes

**❌ Evite:**
```
"Projeto feito com React"
```

**✅ Use:**
```
"Aplicação web moderna com interface intuitiva, sistema de autenticação e dashboard em tempo real. Implementa funcionalidades avançadas como drag & drop e notificações push."
```

### 2. Tecnologias Relevantes

**❌ Evite:**
```
["HTML", "CSS", "JavaScript"]
```

**✅ Use:**
```
["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"]
```

### 3. Links Funcionais

- **GitHub**: Use links reais para seus repositórios
- **Live**: Use links para projetos deployados (Vercel, Netlify, etc.)
- **Mobile**: Para apps mobile, use links do Expo ou stores

## 🖼️ Adicionando Imagens Reais

### 1. Usando Imagens Locais

1. Coloque suas imagens na pasta `public/`
2. Referencie assim:

```typescript
{
  // ... outros campos ...
  image: "/projeto1-screenshot.png", // Imagem na pasta public/
}
```

### 2. Usando URLs Externas

```typescript
{
  // ... outros campos ...
  image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Projeto+1",
}
```

## 📱 Organização dos Projetos

### Projetos em Destaque (featured: true)
- Aparecem no topo da página
- Layout maior e mais visível
- Máximo 2-3 projetos

### Projetos na Grade (featured: false)
- Aparecem na seção "Todos os Projetos"
- Layout compacto
- Pode ter quantos quiser

## 🔄 Exemplos de Diferentes Tipos de Projeto

### Web App
```typescript
{
  title: "Sistema de CRM",
  description: "CRM completo para gestão de clientes com pipeline de vendas, relatórios e integração com APIs externas.",
  technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
  github: "https://github.com/seu-usuario/crm-system",
  live: "https://crm.vercel.app",
  featured: true
}
```

### Mobile App
```typescript
{
  title: "App de Fitness",
  description: "Aplicativo mobile para tracking de exercícios, com planos personalizados e integração com wearables.",
  technologies: ["React Native", "Expo", "Firebase", "HealthKit"],
  github: "https://github.com/seu-usuario/fitness-app",
  live: "https://expo.dev/@seu-usuario/fitness-app",
  featured: false
}
```

### Backend/API
```typescript
{
  title: "API de Microserviços",
  description: "Arquitetura de microserviços com autenticação JWT, cache Redis e documentação Swagger.",
  technologies: ["Node.js", "Express", "Redis", "Docker", "Swagger"],
  github: "https://github.com/seu-usuario/microservices-api",
  live: "https://api.herokuapp.com/docs",
  featured: false
}
```

### Full Stack
```typescript
{
  title: "Rede Social",
  description: "Rede social completa com posts, comentários, likes, chat em tempo real e sistema de notificações.",
  technologies: ["Next.js", "Socket.io", "MongoDB", "AWS S3", "Redis"],
  github: "https://github.com/seu-usuario/social-network",
  live: "https://social.vercel.app",
  featured: true
}
```

## 🎨 Personalização Visual

### Cores das Tags de Tecnologia

As tags de tecnologia usam cores automáticas baseadas no Tailwind. Para personalizar, edite o arquivo `src/components/Projects.tsx`:

```typescript
// Para projetos em destaque
<span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">

// Para projetos na grade
<span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
```

## 🚀 Próximos Passos

1. **Edite os projetos existentes** com suas informações reais
2. **Adicione novos projetos** que você desenvolveu
3. **Teste os links** para garantir que funcionam
4. **Adicione screenshots** dos seus projetos
5. **Organize por relevância** (mais importantes em destaque)

## 💡 Dicas Finais

- **Seja específico** nas descrições
- **Use tecnologias atuais** e relevantes
- **Mantenha links atualizados**
- **Destaque projetos únicos** ou complexos
- **Quantidade ideal**: 4-8 projetos no total

---

Agora você pode personalizar completamente seus projetos! 🎉 