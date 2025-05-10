import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // تغییر زبان
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  // اسکرول
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // کلیک روی لینک‌های داخلی
  const handleAnchorClick = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <a className="logo" href="#">
        <img src="/logo.png" alt="Alireza Alamshah" className="logo-img" />
      </a>

      <nav className="nav">
        <Link
          to="/"
          className={location.pathname === '/' ? 'active' : ''}
        >
          {t('nav.home')}
        </Link>
        <Link
          to="/about"
          className={location.pathname === '/about' ? 'active' : ''}
        >
          {t('nav.about')}
        </Link>
        <a
          href="#portfolio"
          onClick={(e) => handleAnchorClick(e, 'portfolio')}
        >
          {t('nav.portfolio')}
        </a>
        <a href="#contact">{t('nav.contact')}</a>

        <select
          onChange={handleLanguageChange}
          value={i18n.language}
          className="language-select"
        >
          <option value="fa">فارسی</option>
          <option value="en">English</option>
          <option value="de">Deutsch</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
