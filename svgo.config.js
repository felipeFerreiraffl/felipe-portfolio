/** @type {import("svgo").Config} */
const config = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          prefixIds: false,
          cleanupIds: false,
        },
      },
    },
  ],
};

export default config;
