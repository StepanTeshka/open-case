const colors = require(`tailwindcss/colors`);

module.exports = {
  content: [
    `./src/**/*.{html,js,jsx}`,
    `./src/**/**/*.{html,js,jsx}`,
    `./src/**/**/**/*.{html,js,jsx}`,
    `./pages/*.{html,js,jsx}`,
    `./pages/**/*.{html,js,jsx}`,
    `./pages/**/**/*.{html,js,jsx}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
