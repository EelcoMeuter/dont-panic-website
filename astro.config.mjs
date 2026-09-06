// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import lottie from "astro-integration-lottie";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    fonts: [{
        provider: fontProviders.local(),
        name: "Roboto",
        cssVariable: "--font-roboto",
        options: {
            variants: [
                { weight: "300", style: "normal", src: ["@fontsource/roboto/files/roboto-latin-300-normal.woff2", "@fontsource/roboto/files/roboto-latin-300-normal.woff"] },
                { weight: "400", style: "normal", src: ["@fontsource/roboto/files/roboto-latin-400-normal.woff2", "@fontsource/roboto/files/roboto-latin-400-normal.woff"] },
                { weight: "700", style: "normal", src: ["@fontsource/roboto/files/roboto-latin-700-normal.woff2", "@fontsource/roboto/files/roboto-latin-700-normal.woff"] }
            ]
        }
    }],

    i18n: {
        locales: ["de", "en"],
        defaultLocale: "en",
    },

    integrations: [react(), lottie(), mdx()]
});