import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  // Get all section keys
  const sectionKeys = Object.keys(t('privacy.sections', { returnObjects: true }));

  return (
    <div className="privacy-container">
      <h1 className="privacy-title">{t('privacy.title')}</h1>
      <p className="privacy-updated">{t('privacy.lastUpdated')}</p>

      <p>{t('privacy.intro')}</p>

      {sectionKeys.map((key) => {
        const section = t(`privacy.sections.${key}`, { returnObjects: true });
        return (
          <div key={key} className="privacy-section">
            <h2>{section.heading}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {section.list && (
              <ul className="privacy-list">
                {section.list.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            )}
            {section.contact && (
              <p className="privacy-email"><strong>{section.contact}</strong></p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PrivacyPolicy;
