/** @type {import('next').NextConfig} */
const nextConfig = {
  // API so'rovlarini backend serveringizga yo'naltirish (Proxy)
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.NEXT_PUBLIC_API_URL
          ? `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`
          : "http://localhost:5000/api/:path*", // Mahalliy backend manzili
      },
    ];
  },
  // Build paytida TypeScript xatolariga ruxsat berish (agar xatolar to'sqinlik qilsa)
  typescript: {
    ignoreBuildErrors: true,
  },
  // Build paytida ESLint xatolarini o'tkazib yuborish
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
