'use client';

import AnimatedElement from './AnimatedElement';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Avatar */}
          <AnimatedElement animation="scale" delay={0.2}>
            <div className="relative">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                <img 
                  src="/eu.png" 
                  alt="Henrique Erdei - Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedElement>

          {/* Main Content */}
          <div className="space-y-4">
            <AnimatedElement animation="slideUp" delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                {t('hero.title')}
              </h1>
            </AnimatedElement>
            
            <AnimatedElement animation="slideUp" delay={0.6}>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                {t('hero.subtitle')}
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="slideUp" delay={0.8}>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                {t('hero.description')}
              </p>
            </AnimatedElement>
          </div>

          {/* CTA Buttons */}
          <AnimatedElement animation="slideUp" delay={1.0}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AnimatedElement animation="scale" delay={1.2}>
                <a
                  href="#projects"
                  className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {t('hero.cta')}
                </a>
              </AnimatedElement>
              
              <AnimatedElement animation="scale" delay={1.4}>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-gray-400 text-gray-700 font-semibold rounded-lg hover:border-black hover:text-black transition-all duration-300"
                >
                  {t('nav.contact')}
                </a>
              </AnimatedElement>
            </div>
          </AnimatedElement>

          {/* Scroll indicator */}
          <AnimatedElement animation="slideUp" delay={1.6}>
            <div className="pt-8">
              <div className="flex flex-col items-center space-y-2 text-gray-400">
                <span className="text-sm">{t('hero.scroll')}</span>
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default Hero; 