/**
 * Constantes de tema y colores
 * Siguiendo principios de Clean Code y DRY
 */

export const THEME_COLORS = {
  primary: '#fbbf24',
  primaryLight: '#fcd34d',
  primaryDark: '#f59e0b',
  primaryHover: '#fff200',

  background: {
    dark: '#212529',
    darker: '#000000',
  },

  text: {
    primary: '#ffffff',
    secondary: '#e5e5e5',
  },

  gradient: {
    gold: 'linear-gradient(45deg, #fbbf24, #fcd34d, #f59e0b)',
    goldOverlay: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(33, 37, 41, 0.9) 40%, rgba(0, 0, 0, 0.95) 100%)',
  },
} as const;

/**
 * Configuración de animaciones
 */
export const ANIMATION_CONFIG = {
  intersectionThreshold: 0.1,
  transitionDuration: '1s',
  transitionEasing: 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

/**
 * Configuración de partículas por defecto
 */
export const DEFAULT_PARTICLE_CONFIG = {
  count: 20,
  minSize: 2,
  maxSize: 8,
  minDuration: 3,
  maxDuration: 6,
  minDelay: 0,
  maxDelay: 3,
} as const;
