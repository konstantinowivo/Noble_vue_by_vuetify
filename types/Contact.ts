/**
 * Tipos relacionados con formularios de contacto
 */

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
  color?: string;
}
