/**
 * Tipo para los servicios ofrecidos
 * Siguiendo principios de TypeScript para type safety
 */
export interface Service {
  title: string;
  description: string;
  image: string;
  alt: string;
}

/**
 * Tipo para las props del componente ServiceCard
 */
export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}
