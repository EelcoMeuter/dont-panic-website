// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import lottie from "astro-integration-lottie";
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";
import { withIndexHtml } from "./src/utils/withIndexHtml.ts";

// https://astro.build/config
export default defineConfig({
    site: "https://dont-panic.eu",

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

    integrations: [lottie(), mdx(), sitemap({
        serialize(item) {
            item.url = withIndexHtml(item.url);
            return item;
        },
    })]
});