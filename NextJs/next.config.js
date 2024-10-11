const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static-assets.codecademy.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
