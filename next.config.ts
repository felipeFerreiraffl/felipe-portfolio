import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  reactCompiler: {
    compilationMode: "annotation",
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              babel: false,
              jsxRuntime: "automatic", // Evita import desnecessário do React
              dimensions: false,
              expandProps: "end",
              ref: true,
              titleProp: true,
            },
          },
        ],
        as: "*.js",
      },
    },
  },

  // svgr config
  webpack(config: Configuration, { defaultLoaders }): Configuration {
    const fileRouterRule = config?.module?.rules?.find(
      (rule): rule is RuleSetRule =>
        typeof rule === "object" &&
        rule !== null &&
        rule.test instanceof RegExp &&
        rule.test?.test?.(".svg"),
    );

    config?.module?.rules?.push(
      {
        ...fileRouterRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: [
          defaultLoaders.babel, // Loader SWC do Next.js
          {
            loader: "@svgr/webpack",
            options: {
              babel: false,
              typescript: true,
              jsxRuntime: "automatic", // Evita import desnecessário do React
              dimensions: false,
              expandProps: "end",
              ref: true,
              titleProp: true,
              ext: "tsx",
            },
          },
        ],
      },
    );

    if (fileRouterRule) {
      fileRouterRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
