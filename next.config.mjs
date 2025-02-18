/** @type {import('next').NextConfig} */
const nextConfig = {};
// const withNextIntl = require("next-intl/plugin")("./i18n.json");
// module.exports = withNextIntl(nextConfig);

//export default nextConfig;

export default {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "kor", "kh"], // Add supported languages
    defaultLocale: "en", // Default language
  },
};
