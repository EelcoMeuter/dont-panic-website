// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import lottie from "astro-integration-lottie";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.google(),
        name: "Roboto",
        cssVariable: "--font-roboto"
    }],

    i18n: {
        locales: ["de", "en"],
        defaultLocale: "en",
    },

    integrations: [react(), lottie(), mdx()]
});