// tailwind.config.js
// Basic configuration for Tailwind + DaisyUI. This file is
// empty by default when using the CDN build, but it demonstrates
// how to specify content paths if you ever compile locally.

module.exports = {
  content: ["./*.html", "./script/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
