import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },  
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
  protocol: 'https',
  hostname: '**.mypinata.cloud',
},
      {
        protocol: 'https',
        hostname: 'amber-decisive-alligator-189.mypinata.cloud',
      },
    ],
  },
};

export default nextConfig;
