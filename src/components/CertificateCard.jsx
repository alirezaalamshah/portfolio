import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/ProjectCard.css'; // استفاده از همان استایل پروژه‌ها برای یکپارچگی

const CertificateCard = ({ cert }) => {
  const { t } = useTranslation();

  const openCertificate = () => {
    window.open(cert.link, '_blank');
  };

  return (
    <div className="project-card" onClick={openCertificate}>
      <img src={cert.image} alt={t(cert.titleKey)} className="project-image" />
      <div className="overlay">
        <h3>{t(cert.titleKey)}</h3>
        <p>{t(cert.descriptionKey)}</p>
      </div>
    </div>
  );
};

export default CertificateCard;