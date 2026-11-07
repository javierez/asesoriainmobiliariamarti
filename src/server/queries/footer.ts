
import type { FooterProps } from "../../lib/data";

export const getFooterProps = (_accountIdArg?: bigint): FooterProps | null => {
  return {
  "companyName": "Asesoría Inmobiliaria Martí",
  "description": "Asesoría Inmobiliaria Martí: compra, venta y alquiler en Burriana y toda la provincia de Castellón. Encontramos la casa de tus sueños.",
  "socialLinks": {
  "facebook": "https://www.facebook.com/InmoMarti",
  "instagram": "https://www.instagram.com/asesoria_inmobiliaria_marti/"
},
  "officeLocations": [{
  "name": "Oficina de Burriana",
  "address": ["Calle La Carrera, 3", "Burriana, Castellón"],
  "phone": "675 647 664",
  "email": "inmobiliariamartisoler@gmail.com"
}],
  "copyright": "© 2026 Asesoría Inmobiliaria Martí. Todos los derechos reservados."
};
}
