

export type ContactProps = {
  /** Photo of the premises for the editorial "Ven a vernos" panel. */
  image?: string;
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Optional hero banner for /contacto page. Absent => no hero rendered.
  heroImage?: string;
  heroVideo?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  // Optional dedicated WhatsApp number for the floating button. When set (and a
  // valid Spanish mobile), it overrides the default-office phone. Lets the
  // WhatsApp line differ from any single office's displayed number.
  whatsappNumber?: string;
  // Optional number for the floating call button (tel: link). Landline or
  // mobile. Empty/absent => no call button.
  callNumber?: string;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (_accountIdArg?: bigint): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "Estamos aquí para ayudarte",
  "messageForm": true,
  "address": true,
  "phone": true,
  "mail": true,
  "schedule": false,
  "map": true,
  "offices": [{
  "id": "office-1",
  "name": "Oficina de Burriana",
  "address": {
  "street": "Calle La Carrera, 3",
  "city": "Burriana",
  "state": "Castellón",
  "country": "España",
  "postalCode": "12530"
},
  "phoneNumbers": {
  "main": "675 647 664"
},
  "emailAddresses": {
  "info": "inmobiliariamartisoler@gmail.com"
},
  "scheduleInfo": {
  "weekdays": "",
  "saturday": "",
  "sunday": ""
},
  "mapUrl": "https://www.google.com/maps/search/Calle+La+Carrera+3,+12530+Burriana,+Castell%C3%B3n",
  "isDefault": true
}]
};
}

