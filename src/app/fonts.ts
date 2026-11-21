import { GeistSans } from "geist/font/sans";
import {
  Cormorant_Garamond,
  DM_Sans,
} from "next/font/google";
import type { FontFamilyKey } from "~/lib/data";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], display: "swap", variable: "--font-cormorant", weight: ["300", "400", "500", "600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm-sans" });

type FontEntry = { loader: { variable: string; className: string }; cssVar: string };

export const fontCatalog: Partial<Record<FontFamilyKey, FontEntry>> = {
  geist: { loader: GeistSans, cssVar: "var(--font-geist-sans)" },
  cormorant: { loader: cormorant, cssVar: "var(--font-cormorant)" },
  dmSans: { loader: dmSans, cssVar: "var(--font-dm-sans)" },
};

export const builtFonts: { sansFamily: FontFamilyKey; headingFamily: FontFamilyKey } = {
  sansFamily: "dmSans",
  headingFamily: "dmSans",
};

export const allFontVariables = Object.values(fontCatalog)
  .filter((entry): entry is FontEntry => Boolean(entry))
  .map((entry) => entry.loader.variable)
  .join(" ");
