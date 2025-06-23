/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Recommended for production environments like Firebase App Hosting
  typescript: {
    // Fail the build if there are TypeScript errors. Crucial for deployment readiness.
    ignoreBuildErrors: false,
  },
  eslint: {
    // Fail the build if there are ESLint errors.
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
