import type { AboutProps } from "../../lib/data";

// NOTE: resolveTeamPhotos lives in ./team-photos.ts (imported directly by
// callers). Keeping it out of this file lets the static-site transformer
// hardcode getAboutProps and strip this file's DB imports without breaking the
// runtime team-photo helper.

export const getAboutProps = (_accountIdArg?: bigint): AboutProps | null => {
  return {
  "title": "Sobre Nosotros",
  "subtitle": "Encontramos la casa de tus sueños",
  "content": "En Asesoría Inmobiliaria Martí somos un equipo profesional joven y dinámico con un objetivo común: satisfacer las demandas de nuestros clientes. Trabajamos desde Burriana y atendemos toda la provincia de Castellón, y cuidamos cada inmueble como si fuera propio, con empatía, profesionalidad y dedicación.",
  "content2": "Ofrecemos una amplia cartera de viviendas nuevas y de segunda mano, chalets, fincas, alquileres y traspasos. Además, te acompañamos con las mejores garantías económicas del mercado, con hasta el 100% de crédito e hipoteca, y nos encargamos de la tramitación para que comprar sea un camino claro y tranquilo.",
  "image": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/226/website/team/rosa-marti.jpg",
  "services": [{
  "title": "Compraventa de viviendas",
  "icon": "Home"
}, {
  "title": "Valoración de inmuebles",
  "icon": "Calculator"
}, {
  "title": "Chalets y fincas",
  "icon": "Trees"
}, {
  "title": "Alquileres",
  "icon": "Key"
}, {
  "title": "Locales y traspasos",
  "icon": "Store"
}, {
  "title": "Tramitación de hipotecas",
  "icon": "Banknote"
}, {
  "title": "Inversión inmobiliaria",
  "icon": "TrendingUp"
}],
  "maxServicesDisplayed": 6,
  "servicesSectionTitle": "Nuestros Servicios",
  "aboutSectionTitle": "Nuestra Misión",
  "buttonName": "Contacta con nosotros",
  "showKPI": false,
  "kpi3Name": "Zonas de actuación",
  "kpi3Data": "9",
  "originsTitle": "De dónde venimos",
  "originsContent": "Estamos liderados por Rosa Martí, con más de 25 años de experiencia en el sector, y contamos con la visión joven de Albert Ortí en el departamento de inversión. Nos formamos de manera continua para ofrecer el mejor servicio posible: tramitamos hipotecas, gestionamos ventas y alquileres, y cuidamos especialmente al vendedor para conseguir rapidez y buenos resultados.",
  "values": [{
  "title": "Cada inmueble, como si fuera propio",
  "description": "Lo cuidamos con empatía, profesionalidad y dedicación, desde la valoración hasta la firma.",
  "icon": "Heart"
}, {
  "title": "Formación continua",
  "description": "El equipo se forma constantemente para ofrecerte el mejor servicio posible.",
  "icon": "BookOpen"
}, {
  "title": "Rapidez y resultados",
  "description": "Ponemos especial atención en el vendedor: vender bien y en el menor tiempo.",
  "icon": "TrendingUp"
}],
  "team": [{
  "name": "Rosa Martí",
  "role": "Directora · más de 25 años de experiencia",
  "photo": "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com/accounts/226/website/team/rosa-marti.jpg"
}, {
  "name": "Albert Ortí",
  "role": "Departamento de inversión"
}],
  "extendedServices": [{
  "title": "Compraventa de viviendas",
  "description": "Viviendas nuevas y de segunda mano, pisos y casas en Burriana y en toda la provincia de Castellón.",
  "icon": "Home"
}, {
  "title": "Valoración de inmuebles",
  "description": "Te decimos cuánto vale tu casa con datos reales del mercado de Burriana y su comarca.",
  "icon": "Calculator"
}, {
  "title": "Chalets y fincas",
  "description": "Chalets, casas de campo y fincas rústicas y urbanas por toda la provincia.",
  "icon": "Trees"
}, {
  "title": "Alquileres",
  "description": "Alquiler de larga duración y de temporada, también en el Grao y la playa de Burriana.",
  "icon": "Key"
}, {
  "title": "Locales y traspasos",
  "description": "Locales comerciales, naves, garajes y traspasos de negocios.",
  "icon": "Store"
}, {
  "title": "Tramitación de hipotecas",
  "description": "Tramitamos tu hipoteca y te ayudamos a conseguir financiación de hasta el 100% con las mejores garantías.",
  "icon": "Banknote"
}, {
  "title": "Inversión inmobiliaria",
  "description": "Un departamento propio de inversión para encontrar oportunidades con rentabilidad.",
  "icon": "TrendingUp"
}],
  "nosotrosPageTitle": "Sobre Nosotros",
  "nosotrosPageSubtitle": "Un equipo joven y con experiencia que cuida cada inmueble como si fuera propio",
  "servicesPageTitle": "Nuestros Servicios",
  "servicesPageSubtitle": "Compraventa, alquileres, hipotecas e inversión: todo lo que necesitas para tu próximo paso inmobiliario"
};
}
