import React from 'react';
import CertificateCard from './CertificateCard';
import certificates from '../data/certificates';

const CertificateSection = () => {
  return (
    <section id="Certificate" className="portfolio" style={{ paddingTop: 0 }}>
      {/* ما کلاس portfolio را اضافه کردیم تا از همان Grid استایل پروژه‌ها استفاده کند */}
      <div className="projects">
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;