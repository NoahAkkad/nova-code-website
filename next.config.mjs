/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "sv"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.novacode.se" }],
        destination: "https://novacode.se/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
