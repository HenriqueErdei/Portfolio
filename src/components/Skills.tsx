'use client';

import AnimatedElement from './AnimatedElement';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: "Linguagens de Programação",
      skills: [
        { name: "Python", level: 90, color: "bg-blue-500" },
        { name: "JavaScript", level: 50, color: "bg-yellow-500" },
        { name: "TypeScript", level: 50, color: "bg-blue-600" },
        { name: "SQL", level: 80, color: "bg-green-500" },
        { name: "HTML/CSS", level: 90, color: "bg-orange-500" },  
        { name: "Advpl", level: 70, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Frameworks & Bibliotecas",
      skills: [
        { name: "React", level: 50, color: "bg-cyan-500" },
        { name: "Next.js", level: 50, color: "bg-black" },
        { name: "Node.js", level: 50, color: "bg-green-600" },
        { name: "Pandas", level: 90, color: "bg-blue-700" },
        { name: "Flask", level: 90, color: "bg-yellow-800" }
      ]
    },
    {
      title: "Ferramentas & Plataformas",
      skills: [
        { name: "PowerBI", level: 99, color: "bg-yellow-600" },
        { name: "Qlik", level: 50, color: "bg-blue-500" },
        { name: "AWS", level: 75, color: "bg-orange-600" },
        { name: "Git", level: 75, color: "bg-red-600" },
        { name: "Docker", level: 70, color: "bg-blue-500" },
        { name: "Protheus", level: 70, color: "bg-green-500" },
        { name: "N8N", level: 65, color: "bg-pink-300" }
      ]
    },
    {
      title: "Metodologias & Processos",
      skills: [
        { name: "Agile/Scrum", level: 90, color: "bg-purple-500" },
        { name: "Data Modeling", level: 85, color: "bg-indigo-500" },
        { name: "ETL Processes", level: 80, color: "bg-teal-500" },
        { name: "API Development", level: 85, color: "bg-pink-500" },
        { name: "DevOps", level: 80, color: "bg-gray-600" },
        { name: "Jira", level: 95, color: "bg-indigo-500" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedElement animation="slideUp" delay={0.2}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('skills.title')}</h2>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('skills.description')}
            </p>
          </AnimatedElement>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedElement 
              key={category.title} 
              animation="slideUp" 
              delay={0.5 + categoryIndex * 0.1}
            >
              <div className="bg-gray-50 rounded-xl p-8 h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-6 flex-1">
                  {category.skills.map((skill, skillIndex) => (
                    <AnimatedElement 
                      key={skill.name} 
                      animation="slideRight" 
                      delay={0.6 + categoryIndex * 0.1 + skillIndex * 0.05}
                    >
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <AnimatedElement animation="slideUp" delay={1.2}>
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
              {t('skills.education.title')}
            </h3>
          </AnimatedElement>
          
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
              {[
                {
                  title: t('skills.education.mba.title'),
                  institution: t('skills.education.mba.institution'),
                  year: t('skills.education.mba.year'),
                  description: t('skills.education.mba.description')
                },
                {
                  title: t('skills.education.graduation.title'),
                  institution: t('skills.education.graduation.institution'),
                  year: t('skills.education.graduation.year'),
                  description: t('skills.education.graduation.description')
                }
              ].map((cert, index) => (
                <AnimatedElement 
                  key={cert.title} 
                  animation="slideUp" 
                  delay={1.4 + index * 0.2}
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 h-full flex flex-col group">
                    <div className="text-center flex-1">
                      <AnimatedElement animation="slideUp" delay={1.6 + index * 0.2}>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {cert.title}
                        </h4>
                      </AnimatedElement>
                      <AnimatedElement animation="slideUp" delay={1.7 + index * 0.2}>
                        <p className="text-gray-600 mb-1 font-medium">{cert.institution}</p>
                      </AnimatedElement>
                      <AnimatedElement animation="slideUp" delay={1.8 + index * 0.2}>
                        <p className="text-sm text-gray-500 mb-3 bg-gray-50 inline-block px-3 py-1 rounded-full">
                          {cert.year}
                        </p>
                      </AnimatedElement>
                      <AnimatedElement animation="slideUp" delay={1.9 + index * 0.2}>
                        <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                      </AnimatedElement>
                    </div>
                  </div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 