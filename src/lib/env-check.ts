// Environment configuration checker
export const checkEnvironmentConfig = () => {
  const supabaseConfig = {
    url: import.meta.env.VITE_SUPABASE_URL,
    key: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
    projectId: import.meta.env.VITE_SUPABASE_PROJECT_ID,
  };

  const emailjsConfig = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  const isSupabaseConfigured = Boolean(
    supabaseConfig.url && 
    supabaseConfig.key && 
    supabaseConfig.url !== 'https://placeholder.supabase.co'
  );

  const isEmailJSConfigured = Boolean(
    emailjsConfig.serviceId && 
    emailjsConfig.templateId && 
    emailjsConfig.publicKey
  );

  return {
    supabase: {
      configured: isSupabaseConfigured,
      config: isSupabaseConfigured ? supabaseConfig : null,
    },
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
    console.warn('⚠️ EmailJS not configured. Contact forms will use fallback only.');
  }
  
  if (!envStatus.supabase.configured) {
    console.warn('⚠️ Supabase not configured. Fallback database unavailable.');
  }
}