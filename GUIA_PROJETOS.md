# 🚀 Guia - Como Alterar e Criar Projetos

## 📁 Arquivo Principal

Todos os projetos estão definidos no arquivo: `src/components/Projects.tsx`

## 🏗️ Estrutura de um Projeto

```typescript
{
  title: "Nome do Projeto",
  description: "Descrição detalhada do projeto",
  technologies: ["React", "Node.js", "TypeScript"],
  image: "/api/placeholder/400/250",
  github: "https://github.com/seu-usuario/projeto",
  live: "https://projeto.vercel.app",
  featured: true
}
```

### Campos Explicados:

- **`title`**: Nome do projeto (aparece como título)
- **`description`**: Descrição detalhada (2-3 linhas)
- **`technologies`**: Array com as tecnologias usadas
- **`image`**: URL da imagem (atualmente usando placeholder)
- **`github`**: Link para o repositório no GitHub
- **`live`**: Link para o projeto online
- **`featured`**: `true` = aparece em destaque, `false` = aparece na grade geral

## ✏️ Como Editar Projetos Existentes

### Alterar Informações Básicas

```typescript
{
  title: "Meu Projeto Real",
  description: "Descrição do seu projeto real...",
  technologies: ["React", "Node.js", "Seu Projeto"],
  github: "https://github.com/SEU-USUARIO/SEU-PROJETO",
  live: "https://seu-projeto.vercel.app",
  featured: true
}
```

### Exemplo Prático

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

### Adicionar no Array

```typescript
const projects = [
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

### Exemplo de Novo Projeto

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

## 🖼️ Adicionando Imagens Reais

### Usando Imagens Locais

1. Coloque suas imagens na pasta `public/`
2. Referencie assim:

```typescript
{
  image: "/projeto1-screenshot.png",
}
```

### Usando URLs Externas

```typescript
{
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