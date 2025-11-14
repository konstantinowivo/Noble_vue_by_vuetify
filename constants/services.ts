import type { Service } from '@/types/Service';

// Importar imágenes
import matafuegosImage from '@/assets/portada.extintores.jpg';
import recargaImage from '@/assets/recarga.co2.png';
import instalacionImage from '@/assets/instalaciones.png';
import elemSeguridad from '@/assets/casco-construccion-seguridad-vista-superior-mascara-medica.jpg';

/**
 * Constantes de servicios ofrecidos
 * Siguiendo principios de Clean Code: separación de datos y lógica
 */
export const SERVICES: Service[] = [
  {
    title: 'ELEMENTOS DE SEGURIDAD',
    description:
      'Venta y asesoría en seguridad industrial, equipos de protección personal y elementos de seguridad laboral.',
    image: elemSeguridad,
    alt: 'Elementos de seguridad industrial y protección personal',
  },
  {
    title: 'CÁPSULAS PARA SODA',
    description:
      'Venta y recarga de envases de CO2, cilindros y cápsulas para diferentes aplicaciones.',
    image: recargaImage,
    alt: 'Cápsulas y cilindros de CO2',
  },
  {
    title: 'GASES PARA CONSUMO',
    description:
      'Brindamos asesoría, venta y servicio técnico especializado en gases industriales y comerciales.',
    image: instalacionImage,
    alt: 'Instalaciones de gases industriales',
  },
  {
    title: 'EXTINTORES',
    description:
      'Venta y recarga anual de extintores, mantenimiento preventivo y asesoría en sistemas contra incendios.',
    image: matafuegosImage,
    alt: 'Extintores y sistemas contra incendios',
  },
];

export const SERVICE_CTA_TEXT = 'Contactanos';
