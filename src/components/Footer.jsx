import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/footer.css';
// تست

const Footer = () => {
  const { t, i18n } = useTranslation(); // ✅ گرفتن i18n
  const [popupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupVisible(true);
    setTimeout(() => setPopupVisible(false), 3000);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* ستون اطلاعات تماس */}
          <div className="footer-col contact-info">
            {/* <h2 className="footer-logo">علیرضا عالمشاه</h2> */}
            <img src="/logo.png" alt="Alireza Alamshah" className="logo-img" />
            <div className="contact-details">
              <p><i className="fas fa-map-marker-alt"></i> {t('footer.location')}</p>
              <p>
                <a href="mailto:ar.alamshah@gmail.com" className="clickable-item">
                  <i className="fas fa-envelope"></i> ar.alamshah@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+989126540620" className="clickable-item">
                  <i className="fas fa-phone"></i> 09126540620
                </a>
                <a href="tel:+989355958047" className="clickable-item">
                  <i className="fas fa-phone"></i> 09355958047
                </a>
              </p>
            </div>
            <div className="social-links">
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://t.me/yourchannel" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram-plane"></i></a>
              <a href="https://github.com/alirezaalamshah" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/ali-alamshah/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://wa.me/989126540620" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>

          {/* ستون فرم تماس */}
          <div className="footer-col contact-form">
            <h3>{t('footer.sendMessage')}</h3>
            <form
              onSubmit={handleSubmit}
              className={`contact-form-fields ${i18n.language === 'fa' ? 'rtl' : 'ltr'}`}
            >
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder={`${t('footer.firstName')}*`}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder={`${t('footer.lastName')}*`}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder={`${t('footer.email')}*`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t('footer.phone')}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                placeholder={t('footer.message')}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                {t('footer.submit')}
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} {t('footer.rights')}
        </div>
      </div>

      <div className={`success-popup ${popupVisible ? 'show' : ''}`}>
        <i className="fas fa-check-circle"></i>
        {t('footer.success')}
      </div>
    </footer>
  );
};

export default Footer;
