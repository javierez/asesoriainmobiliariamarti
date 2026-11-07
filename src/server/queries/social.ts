

export type SocialLink = {
  platform:
    | "facebook"
    | "twitter"
    | "instagram"
    | "linkedin"
    | "youtube"
    | "tiktok";
  url: string;
  previewImage?: string;
};

export const getSocialLinks = (_accountIdArg?: bigint): SocialLink[] => {
  return [{
  "platform": "facebook",
  "url": "https://www.facebook.com/InmoMarti",
  "previewImage": undefined
}, {
  "platform": "instagram",
  "url": "https://www.instagram.com/asesoria_inmobiliaria_marti/",
  "previewImage": undefined
}];
}