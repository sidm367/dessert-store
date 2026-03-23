
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    reactStrictMode: true,
    turbopack: {
    root: __dirname, // sets the inner folder as the root
  },
     
   
    
};

export default nextConfig;


/** @type {import('next').NextConfig} 
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
*/