import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open user's email app with pre-filled fields
    window.location.href = `mailto:lexigramapp@outlook.com?subject=${encodeURIComponent(
      t('contact.emailSubject')
    )}&body=${encodeURIComponent(t('contact.emailBody') + email)}`;
  };

  return (
    <div className="contact-container">
      <img className="app-icon" src="../assets/app-icon.png" alt="App Icon" />
      <h1>{t('contact.title')}</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>{t('contact.labelEmail')}</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder={t('contact.placeholderEmail')}
        />

        <button type="submit">{t('contact.buttonSend')}</button>
      </form>
    </div>
  );
};

export default Contact;
