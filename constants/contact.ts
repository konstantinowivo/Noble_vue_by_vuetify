import type { ContactInfo, SocialLink } from '@/types/Contact';

/**
 * Información de contacto de la empresa
 * Siguiendo principios de Clean Code: constantes centralizadas
 */
export const CONTACT_INFO: ContactInfo = {
  address: 'San Martín 2154, S2000 Rosario, Santa Fe',
  phone: '+54 341 305-2530',
  email: 'info@matafuegosnoble.com',
  whatsapp: '543413052530',
};

/**
 * Enlaces a redes sociales
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    icon: 'mdi-facebook',
    url: 'https://facebook.com/MatafuegosNoble',
    color: '#1877F2',
  },
  {
    name: 'Instagram',
    icon: 'mdi-instagram',
    url: 'https://instagram.com/MatafuegosNoble',
    color: '#E4405F',
  },
];

/**
 * URL de WhatsApp con número incluido
 */
export const WHATSAPP_URL = `https://wa.me/${CONTACT_INFO.whatsapp}`;
