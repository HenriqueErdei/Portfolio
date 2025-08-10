# 📊 Guia - Projetos Power BI no Portfólio

## 🎯 Estrutura Básica

```typescript
{
  title: "Dashboard Power BI - [Nome do Projeto]",
  description: "Descrição detalhada do dashboard e suas funcionalidades",
  technologies: ["Power BI", "DAX", "SQL", "Excel"],
  image: "/api/placeholder/400/250",
  github: "https://github.com/seu-usuario/powerbi-projeto",
  live: "https://app.powerbi.com/view?r=eyJrIjoiSEU_LINK_PUBLICO_AQUI",
  featured: true
}
```

## 📊 Exemplos de Projetos Power BI

### Dashboard de Vendas
```typescript
{
  title: "Dashboard de Vendas - Análise Comercial",
  description: "Dashboard interativo com análise de vendas por região, produto e período. Inclui KPIs de performance, tendências e previsões.",
  technologies: ["Power BI", "DAX", "SQL Server", "Excel"],
  github: "https://github.com/seu-usuario/dashboard-vendas",
  live: "https://app.powerbi.com/view?r=eyJrIjoiYOUR_LINK_HERE",
  featured: true
}
```

### Dashboard Financeiro
```typescript
{
  title: "Dashboard Financeiro - Controle Orçamentário",
  description: "Painel de controle financeiro com análise de receitas, despesas, fluxo de caixa e indicadores de rentabilidade.",
  technologies: ["Power BI", "DAX", "Power Query", "SharePoint"],
  github: "https://github.com/seu-usuario/dashboard-financeiro",
  live: "https://app.powerbi.com/view?r=eyJrIjoiYOUR_LINK_HERE",
  featured: false
}
```

### Dashboard de RH
```typescript
{
  title: "Dashboard RH - Gestão de Pessoas",
  description: "Dashboard de recursos humanos com análise de turnover, produtividade, treinamentos e indicadores de satisfação.",
  technologies: ["Power BI", "DAX", "SQL", "Power Automate"],
  github: "https://github.com/seu-usuario/dashboard-rh",
  live: "https://app.powerbi.com/view?r=eyJrIjoiYOUR_LINK_HERE",
  featured: false
}
```

## 🔗 Como Obter o Link Público do Power BI

### 1. Publicar no Power BI Service
1. Abra seu dashboard no Power BI Desktop
2. Clique em **"Publish"** (Publicar)
3. Selecione o workspace no Power BI Service
4. Aguarde a publicação

### 2. Criar Link Público
1. No Power BI Service, abra seu dashboard
2. Clique em **"Share"** (Compartilhar)
3. Selecione **"Publish to web"** (Publicar na web)
4. Clique em **"Create embed code"** (Criar código de incorporação)
5. Copie o link gerado

### 3. Link Gerado
```
https://app.powerbi.com/view?r=eyJrIjoiMjA5NzI5NzAtNzE5Ny00NzE3LWEyNzYtNzM5NzM5NzM5NzM5IiwidCI6IjEyMzQ1Njc4LTkwMTItNDU2Ny1hNzM5LTc5NzM5NzM5NzM5NyIsImMiOjh9
```

## 📋 Tecnologias para Power BI

### Tecnologias Principais:
- **Power BI** - Ferramenta principal
- **DAX** - Linguagem de fórmulas
- **Power Query** - Transformação de dados
- **SQL** - Consultas de banco de dados

### Tecnologias Complementares:
- **Excel** - Preparação de dados
- **SharePoint** - Armazenamento de dados
- **Power Automate** - Automação
- **Azure** - Cloud services
- **Python** - Scripts de dados
- **R** - Análise estatística

## 🖼️ Screenshots para Power BI

### Usando Imagens Locais
1. Tire um screenshot do seu dashboard
2. Salve na pasta `public/` como `dashboard-vendas.png`
3. Use no código:

```typescript
{
  image: "/dashboard-vendas.png",
}
```

### Usando Placeholder
```typescript
{
  image: "https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=Dashboard+Power+BI",
}
```

## 📊 Exemplos Completos de Projetos

### Dashboard Executivo
```typescript
{
  title: "Dashboard Executivo - Visão Geral da Empresa",
  description: "Dashboard executivo consolidado com KPIs financeiros, operacionais e de mercado. Permite análise estratégica com drill-down por departamento e período.",
  technologies: ["Power BI", "DAX", "SQL Server", "Power Query"],
  image: "/api/placeholder/400/250",
  github: "https://github.com/seu-usuario/dashboard-executivo",
  live: "https://app.powerbi.com/view?r=eyJrIjoiYOUR_LINK_HERE",
  featured: true
}
```

### Dashboard de Supply Chain
```typescript
{
  title: "Dashboard Supply Chain - Gestão de Estoque",
  description: "Dashboard de cadeia de suprimentos com controle de estoque, lead times, fornecedores e análise de custos logísticos.",
  technologies: ["Power BI", "DAX", "Excel", "SharePoint"],
  image: "/api/placeholder/400/250",
  github: "https://github.com/seu-usuario/dashboard-supply-chain",
  live: "https://app.powerbi.com/view?r=eyJrIjoiYOUR_LINK_HERE",
  featured: false
}
```

## 💡 Exemplo Final Completo

```typescript
const projects = [
  {
    title: "Dashboard Power BI - Análise de Vendas",
    description: "Dashboard interativo de vendas com análise de performance por região, produto e período. Implementa KPIs avançados, filtros dinâmicos e previsões usando DAX. Reduziu tempo de análise em 80%.",
    technologies: ["Power BI", "DAX", "SQL Server", "Power Query", "Excel"],
    image: "/dashboard-vendas.png",
    github: "https://github.com/seu-usuario/powerbi-vendas",
    live: "https://app.powerbi.com/view?r=eyJrIjoiYOUR_PUBLIC_LINK_HERE",
    featured: true
  }
];
``` 