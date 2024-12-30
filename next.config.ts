import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        formats: ["image/avif", "image/webp"],

        remotePatterns: [
            {
                protocol: "https",
                hostname: "static-src.vocagame.com",
                port: "",
                pathname: "/**/**",
            },
        ],
    },
};

export default nextConfig;
