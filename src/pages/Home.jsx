import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typewriter } from 'react-simple-typewriter';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import PageWrapper from '../components/PageWrapper';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useTranslation();
  const location = useLocation(); // برای گرفتن state مربوط به navigate

  useEffect(() => {
    // اسکرول به بالا هنگام بارگذاری صفحه
    window.scrollTo(0, 0);

    // اگر از route دیگر به این صفحه آمدیم و scrollTo در state وجود دارد، اسکرول کن
    if (location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // تأخیر کوتاه برای اطمینان از آماده بودن DOM
      }
    }

    // کنترل اسکرول برای تغییر استایل هدر
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location]);

  // فیلتر دسته‌بندی پروژه‌ها
  const handleCategoryChange = (categoryKey) => {
    setActiveCategory(categoryKey);
    if (categoryKey === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.categoryKey === categoryKey));
    }
  };

  const categories = ['all', 'web', 'graphic', 'desktop','excel'];

  return (
    
    <PageWrapper animationType="fade">
      {/* هدر سایت */}
      <Header scrolled={scrolled} />

      {/* سکشن هرو (معرفی) */}
      <section id="hero" className="hero">
        <div className="hero-video">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/bg-video4.mp4" type="video/mp4" />
            {t('video_not_supported')}
          </video>
        </div>

        <div className="hero-content">
          <h1>{t('greeting')}</h1>
          <h3>
            <span>{t('iam')} </span>
            <span style={{ color: '#00ffff', fontWeight: 'bold' }}>
              <Typewriter
                words={t('typewriter_words', { returnObjects: true })}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>
          <p>{t('description')}</p>
          {/* دکمه رفتن به سکشن نمونه کارها */}
          <button
            className="cta-btn"
            onClick={() =>
              document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('see_portfolio')}
          </button>
        </div>
      </section>

      {/* سکشن نمونه کارها */}
      <section id="portfolio" className="portfolio">
        <h2 className="section-title">{t('portfolio_title')}</h2>

        {/* دکمه‌های فیلتر دسته‌بندی پروژه‌ها */}
        <div className="category-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={activeCategory === cat ? 'active' : ''}
            >
              {t(`categories.${cat}`)}
            </button>
          ))}
        </div>

        {/* نمایش پروژه‌ها */}
        <div className="projects">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* فوتر سایت */}
      <Footer />
    </PageWrapper>
  );
};

export default Home;