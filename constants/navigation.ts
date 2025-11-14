import type { NavigationItem } from '@/types/Navigation';

/**
 * Items del menú de navegación principal
 * Siguiendo principios de Clean Code: configuración centralizada
 */
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    title: 'Inicio',
    to: '/',
  },
  {
    title: 'Nosotros',
    to: '/',
    hash: '#nosotros',
  },
  {
    title: 'Servicios',
    to: '/',
    hash: '#servicios',
  },
  {
    title: 'Contacto',
    to: '/contacto',
  },
];
