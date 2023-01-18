/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    webpack: (config, { isServer }) => {
        if (isServer) {
            require("./scripts/sitemap-generator");
        }
        return config;
    },
}

module.exports = nextConfig