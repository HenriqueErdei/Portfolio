'use client';

import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(t('projects.categories.all'));

  const projects = [
    {
      id: 1,
      title: "Dashboard de Vendas Interativo",
      description: "Dashboard completo em Power BI para análise de vendas em tempo real, com KPIs estratégicos e drill-down capabilities.",
      technologies: ["Power BI", "DAX", "SQL Server", "ETL"],
      image: "/api/placeholder/400/250",
      category: t('projects.categories.bi'),
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Sistema de Automação de Relatórios",
      description: "Automação completa de relatórios semanais usando Python e AWS Lambda, reduzindo tempo de geração em 80%.",
      technologies: ["Python", "AWS Lambda", "Pandas", "S3"],
      image: "/api/placeholder/400/250",
      category: t('projects.categories.automation'),
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "API REST para Gestão de Dados",
      description: "API completa para gestão de dados empresariais com autenticação JWT e documentação Swagger.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      image: "/api/placeholder/400/250",
      category: t('projects.categories.development'),
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Aplicação Web de Analytics",
      description: "Aplicação React para visualização de dados com gráficos interativos e filtros avançados.",
      technologies: ["React", "TypeScript", "D3.js", "Node.js"],
      image: "/api/placeholder/400/250",
      category: t('projects.categories.development'),
      link: "#",
      github: "#"
    },
    {
      id: 5,
      title: "Sistema ERP Protheus",
      description: "Implementação e customização do sistema ERP Protheus para gestão empresarial completa, incluindo módulos financeiro, fiscal e comercial.",
      technologies: ["Protheus", "Advpl", "SQL Server", "TOTVS"],
      image: "/api/placeholder/400/250",
      category: t('projects.categories.protheus'),
      link: "#",
      github: "#"
    }
  ];

  const categories = [
    t('projects.categories.all'), 
    t('projects.categories.bi'), 
    t('projects.categories.automation'), 
    t('projects.categories.development'), 
    t('projects.categories.protheus')
  ];

  // Filtrar projetos baseado na categoria selecionada
  const filteredProjects = selectedCategory === t('projects.categories.all')
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedElement animation="slideUp" delay={0.2}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('projects.title')}</h2>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              {t('projects.description')}
            </p>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.6}>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t('projects.instruction')}
            </p>
          </AnimatedElement>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <AnimatedElement 
              key={category} 
              animation="scale" 
              delay={0.5 + index * 0.1}
            >
              <button 
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-black text-white border-black'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-black hover:text-black'
                }`}
              >
                {category}
              </button>
            </AnimatedElement>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedElement 
              key={project.id} 
              animation="slideUp" 
              delay={0.6 + index * 0.1}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <AnimatedElement animation="slideUp" delay={0.7 + index * 0.1}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                  </AnimatedElement>
                  
                  <AnimatedElement animation="slideUp" delay={0.8 + index * 0.1}>
                    <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>
                  </AnimatedElement>

                  {/* Technologies */}
                  <AnimatedElement animation="slideUp" delay={0.9 + index * 0.1}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </AnimatedElement>

                  {/* Project Links */}
                  <AnimatedElement animation="slideUp" delay={1.0 + index * 0.1}>
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.link}
                        className="flex-1 px-4 py-2 bg-black text-white text-center rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        {t('projects.viewProject')}
                      </a>
                      <a
                        href={project.github}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-black hover:text-black transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </div>
                  </AnimatedElement>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <AnimatedElement animation="slideUp" delay={1.5}>
            <p className="text-lg text-gray-600 mb-6">
              {t('projects.cta.text')}
            </p>
          </AnimatedElement>
          <AnimatedElement animation="scale" delay={1.6}>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              {t('projects.cta.button')}
            </a>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Projects; 