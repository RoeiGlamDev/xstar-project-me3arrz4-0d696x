import { defineConfig } from 'next';

export default defineConfig({
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your actual image domain
    formats: ['image/avif', 'image/webp']
},
  experimental: {
    optimizeCss: true
},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
});
    return config;
  },
  env: {
    BRAND_NAME: 'luxury LRP cosmetics',
    PRIMARY_COLOR: '#FFA500', // Orange
    SECONDARY_COLOR: '#FFFFFF', // White
  }
});