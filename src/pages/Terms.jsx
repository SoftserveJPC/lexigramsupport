import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfService = () => {
  const { t } = useTranslation();

  // Get section keys as an array
  const sectionKeys = Object.keys(t('terms.sections', { returnObjects: true }));

  return (
    <div className="tos-container">
      <h1 className="tos-title">{t('terms.title')}</h1>
      <p className="tos-updated">{t('terms.lastUpdated')}</p>

      <p>{t('terms.intro')}</p>

      {sectionKeys.map((key) => {
        const section = t(`terms.sections.${key}`, { returnObjects: true });
        return (
          <div key={key} className="tos-section">
            <h2>{section.heading}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {section.contact && (
              <p className="tos-email"><strong>{section.contact}</strong></p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TermsOfService;
