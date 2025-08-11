'use client';

import AnimatedElement from './AnimatedElement';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedElement animation="slideUp" delay={0.2}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.title')}</h2>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {t('about.description1')}
            </p>
          </AnimatedElement>
          <AnimatedElement animation="slideUp" delay={0.6}>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              {t('about.description2')}
            </p>
          </AnimatedElement>
          
          {/* Resume Download Button */}
          <AnimatedElement animation="scale" delay={0.8}>
            <a
              href="/curriculo.pdf"
              download="Henrique_Erdei_Curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
              aria-label="Download do currículo"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t('about.downloadCV')}
            </a>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default About; 