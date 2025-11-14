/**
 * Composable para validaciones de formularios
 * Sigue principios de Clean Code: funciones pequeñas y descriptivas
 */

export interface ValidationRule {
  (value: string): boolean | string;
}

/**
 * Reglas de validación reutilizables
 */
export function useFormValidation() {
  /**
   * Valida que un campo sea requerido
   */
  const required = (message = 'Este campo es requerido'): ValidationRule => {
    return (value: string) => !!value || message;
  };

  /**
   * Valida formato de email
   */
  const email = (message = 'Email inválido'): ValidationRule => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (value: string) => emailPattern.test(value) || message;
  };

  /**
   * Valida longitud mínima
   */
  const minLength = (min: number, message?: string): ValidationRule => {
    const defaultMessage = `Debe tener al menos ${min} caracteres`;
    return (value: string) => value.length >= min || message || defaultMessage;
  };

  /**
   * Valida longitud máxima
   */
  const maxLength = (max: number, message?: string): ValidationRule => {
    const defaultMessage = `Debe tener máximo ${max} caracteres`;
    return (value: string) => value.length <= max || message || defaultMessage;
  };

  /**
   * Valida formato de teléfono
   */
  const phone = (message = 'Teléfono inválido'): ValidationRule => {
    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    return (value: string) => phonePattern.test(value) || message;
  };

  return {
    required,
    email,
    minLength,
    maxLength,
    phone,
  };
}
