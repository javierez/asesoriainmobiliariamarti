import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (_accountIdArg?: bigint): string[] => {
  return ["Burriana"];
}

// Using React cache to memoize the query
export const getHeroProps = (_accountIdArg?: bigint): HeroProps | null => {
  return {
  "title": "Encontramos la casa de tus sueños",
  "subtitle": "En Inmobiliaria Martí cuidamos cada inmueble como si fuera propio, con empatía, profesionalidad y dedicación. Compra, venta y alquiler en Burriana y toda la provincia de Castellón.",
  "backgroundMedia": [{
  "url": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/226/website/hero/burriana-playa.jpg",
  "type": "image"
}],
  "backgroundImage": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/226/website/hero/burriana-playa.jpg",
  "backgroundVideo": "",
  "backgroundType": "image",
  "findPropertyButton": "Explorar Propiedades",
  "contactButton": "Contáctanos",
  "slides": []
};
}
