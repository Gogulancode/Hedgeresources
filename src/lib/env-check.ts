// Environment configuration checker
export const checkEnvironmentConfig = () => {
  const emailjsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const isEmailJSConfigured = Boolean(
    emailjsConfig.serviceId && 
    emailjsConfig.templateId && 
    emailjsConfig.publicKey
  );

  return {
    emailjs: {
      configured: isEmailJSConfigured,
      config: isEmailJSConfigured ? emailjsConfig : null,
    },
    environment: import.meta.env.MODE,
  };
};

// Log environment status in development
if (import.meta.env.DEV) {
  const envStatus = checkEnvironmentConfig();
  console.log('Environment Configuration Status:', envStatus);
  
  if (!envStatus.emailjs.configured) {
    console.warn('⚠️ EmailJS not configured. Contact forms will not work.');
  }
}