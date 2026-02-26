import type { NextConfig } from "next";
import type { Configuration, RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  reactCompiler: {
    compilationMode: "annotation",
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // svgr config
  webpack(config: Configuration): Configuration {
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
        use: ["@svgr/webpack"],
      },
    );

    if (fileRouterRule) {
      fileRouterRule.exclude = /\.svg$/i;
    }

    return config;
  },
};

export default nextConfig;
