import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['www.themealdb.com'], // Додайте домен, з якого будуть завантажуватися зображення
  },
};

export default nextConfig;
