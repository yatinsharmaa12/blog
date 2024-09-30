/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          port:'',
          pathname: '/**',
        }

      ], // Add external image domain
    },
  };
  
  export default nextConfig;
  