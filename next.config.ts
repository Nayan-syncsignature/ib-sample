import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.postimg.cc',    // Allow images from postimg.cc
      'postimg.cc',      // Also include the base domain
      'i.imgur.com',     // Common image hosting
      'imgur.com',
      'res.cloudinary.com',  // Another common image hosting service
      's3-alpha-sig.figma.com'
    ],
  },
};

export default nextConfig;
