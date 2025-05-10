import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profileImage from '../assets/profile.jpg';
import backgroundVideo from '../assets/bg-video09.mp4';
import '../styles/about.css';
import PageWrapper from '../components/PageWrapper';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'fa';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <PageWrapper animationType="fade">
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <main className={`about-container ${isRTL ? 'rtl' : 'ltr'}`}>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="video-background">
            <video autoPlay loop muted playsInline>
              <source src={backgroundVideo} type="video/mp4" />
              {t('video_not_supported')}
            </video>
          </div>

          <div className="hero-content">
            <div className="profile-image-container">
              <img src={profileImage} alt="Alireza Alamshah" className="profile-image" />
              <div className="image-border"></div>
            </div>
            <div className="hero-text">
              <h1 className="hero-title">Alireza Alamshah</h1>
              <h2 className="hero-subtitle">{t('about.hero_subtitle')}</h2>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="section-header">
            <h2 className="section-title">{t('about.section_title')}</h2>
            <div className="title-line"></div>
          </div>
          <div className="about-content">
            {t('about.content', { returnObjects: true }).map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <div className="section-header">
            <h2 className="section-title">{t('skills.section_title')}</h2>
            <div className="title-line"></div>
          </div>
          <div className="skills-grid">
            {['language','frontend', 'design', 'other'].map((category) => (
              <div className="skill-category" key={category}>
                <h3>{t(`skills.${category}.title`)}</h3>
                <ul>
                  {t(`skills.${category}.items`, { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="timeline-section">
          <div className="section-header">
            <h2 className="section-title">{t('experience.section_title')}</h2>
            <div className="title-line"></div>
          </div>
          <div className="timeline-container">
            {t('experience.items', { returnObjects: true }).map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageWrapper>
  );
};

export default About;