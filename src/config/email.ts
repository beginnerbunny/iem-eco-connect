// EmailJS Configuration
// Get these values from https://www.emailjs.com/
export const EMAIL_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
  companyEmail: import.meta.env.VITE_COMPANY_EMAIL || 'iem2012@rediffmail.com'
};

// Debug: Log configuration (remove in production)
console.log('EmailJS Config:', {
  serviceId: EMAIL_CONFIG.serviceId,
  templateId: EMAIL_CONFIG.templateId,
  publicKey: EMAIL_CONFIG.publicKey ? '***' + EMAIL_CONFIG.publicKey.slice(-4) : 'Not set',
  companyEmail: EMAIL_CONFIG.companyEmail
});

// Email template parameters
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  phone: string;
  message: string;
  to_email: string;
  reply_to: string;
  [key: string]: unknown;
}
