import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-updated">Last updated: October 2025</p>

      <p>
        Your privacy is important to us. This Privacy Policy explains how our app handles your
        information.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        At this time, our app does not collect, store, or share any personal information on our servers.
        All data generated within the app (such as preferences, settings, or progress) is stored locally
        on your device only.
      </p>
      <p>
        In the future, we may collect a device identifier (Device ID) to help us improve app
        performance and maintain user sessions. If we do, this information will:
      </p>

      <ul className="privacy-list">
        <li>Be used only for app functionality (e.g., syncing data or managing subscriptions),</li>
        <li>Never be sold or shared with third parties,</li>
        <li>Be stored securely.</li>
      </ul>

      <h2>2. Third-Party Services</h2>
      <p>
        We currently do not use any third-party analytics, tracking, or advertising tools.
        If this changes, we’ll update this policy to explain exactly what is used and why.
      </p>

      <h2>3. Data Security</h2>
      <p>
        Because your data is stored on your device, you control it. Deleting the app will remove all
        local data associated with it.
      </p>

      <h2>4. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy occasionally to reflect improvements or new features.
        The latest version will always be available in the app.
      </p>

      <h2>5. Contact</h2>
      <p>If you have any questions or concerns about your privacy, please contact us at:</p>

      <p className="privacy-email"><strong>lexigramapp@outlook.com</strong></p>
    </div>
  );
};

export default PrivacyPolicy;
