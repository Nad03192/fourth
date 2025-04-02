import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com"],
  },
};

module.exports = nextConfig;

export default nextConfig;
