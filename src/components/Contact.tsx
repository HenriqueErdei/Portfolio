'use client';

import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const services = [
    {
      title: t('contact.services.bi.title'),
      description: t('contact.services.bi.description'),
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: t('contact.services.automation.title'),
      description: t('contact.services.automation.description'),
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: t('contact.services.development.title'),
      description: t('contact.services.development.description'),
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: t('contact.services.consulting.title'),
      description: t('contact.services.consulting.description'),
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="w-full px-8">
        <div className="flex justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <AnimatedElement animation="slideUp" delay={0.2}>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
              </AnimatedElement>
              <AnimatedElement animation="slideUp" delay={0.4}>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('contact.description')}
                </p>
              </AnimatedElement>
            </div>

            <div className="grid lg:grid-cols-2 gap-24">
              {/* Contact Form */}
              <div>
                <AnimatedElement animation="slideRight" delay={0.3}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('contact.form.title')}</h3>
                </AnimatedElement>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatedElement animation="slideRight" delay={0.4}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="slideRight" delay={0.5}>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                  </AnimatedElement>
                  <AnimatedElement animation="slideRight" delay={0.6}>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.subject')}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                        placeholder={t('contact.form.subjectPlaceholder')}
                      />
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="slideRight" delay={0.7}>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
                        placeholder={t('contact.form.messagePlaceholder')}
                      />
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="slideRight" delay={0.8}>
                    <button
                      type="submit"
                      className="w-full px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      {t('contact.form.send')}
                    </button>
                  </AnimatedElement>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <AnimatedElement animation="slideLeft" delay={0.4}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('contact.info.title')}</h3>
                </AnimatedElement>
                
                <div className="space-y-4">
                  <AnimatedElement animation="slideLeft" delay={0.5}>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="font-medium text-gray-900">{t('contact.info.email')}</p>
                        <p className="text-gray-600">henrique@email.com</p>
                      </div>
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="slideLeft" delay={0.6}>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="font-medium text-gray-900">{t('contact.info.location')}</p>
                        <p className="text-gray-600">São Paulo, Brasil</p>
                      </div>
                    </div>
                  </AnimatedElement>

                  <AnimatedElement animation="slideLeft" delay={0.7}>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-2 lg:space-y-0 lg:space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-center lg:text-left">
                        <p className="font-medium text-gray-900">{t('contact.info.availability')}</p>
                        <p className="text-gray-600">{t('contact.info.availabilityText')}</p>
                      </div>
                    </div>
                  </AnimatedElement>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <AnimatedElement animation="slideLeft" delay={0.8}>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">{t('contact.social.title')}</h3>
                  </AnimatedElement>
                  
                  <div className="flex justify-center lg:justify-start space-x-4">
                    <AnimatedElement animation="scale" delay={0.9}>
                      <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    </AnimatedElement>
                    
                    <AnimatedElement animation="scale" delay={1.0}>
                      <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </AnimatedElement>
                    
                    <AnimatedElement animation="scale" delay={1.1}>
                      <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                        <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    </AnimatedElement>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Projects - Centralized */}
            <div className="mt-20">
              <AnimatedElement animation="slideUp" delay={0.9}>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">{t('contact.services.title')}</h3>
              </AnimatedElement>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {services.map((service, index) => (
                    <AnimatedElement key={service.title} animation="scale" delay={1.0 + index * 0.1}>
                      <div className="bg-gray-50 p-6 rounded-lg text-center h-full flex flex-col hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                          {service.icon}
                        </div>
                        <h4 className="font-medium text-gray-900 mb-3 text-sm">{service.title}</h4>
                        <p className="text-xs text-gray-600 flex-1">{service.description}</p>
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 