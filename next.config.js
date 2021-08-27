module.exports = {
  reactStrictMode: true,
  inlineImageLimit: 16384,
  webpack(config, options) {
    config.plugins = config.plugins || [];
    config.plugins = [...config.plugins];
    return config;
  },
  images: {
    disableStaticImages: true,
  },
  images: {
    loader: "imgix",
    path: "/",
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
