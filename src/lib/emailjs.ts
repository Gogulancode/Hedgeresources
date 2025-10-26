import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

// Check if EmailJS is properly configured
const isEmailJSConfigured = 
  EMAILJS_CONFIG.serviceId && 
  EMAILJS_CONFIG.templateId && 
  EMAILJS_CONFIG.publicKey &&
  EMAILJS_CONFIG.serviceId !== '' &&
  EMAILJS_CONFIG.templateId !== '' &&
  EMAILJS_CONFIG.publicKey !== '';

// Initialize EmailJS
export const initEmailJS = () => {
  if (isEmailJSConfigured && EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
};

// Send email function
export const sendEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
  product_name?: string;
}) => {
  // Check if EmailJS is configured
  if (!isEmailJSConfigured) {
    throw new Error('EmailJS is not properly configured. Please check environment variables.');
  }

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      message: formData.message,
      product_name: formData.product_name || 'General Inquiry',
      to_email: 'hegde.resources@gmail.com',
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return response;
  } catch (error) {
    console.error('EmailJS send error:', error);
    throw error;
  }
};

// Export configuration status
export const isEmailJSEnabled = isEmailJSConfigured;

export default { initEmailJS, sendEmail, isEmailJSEnabled };