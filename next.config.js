const path = require("path");

module.exports = {
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, "src"),
      styles: path.resolve(__dirname, "styles"),
      node_modules: path.resolve(__dirname, "node_modules"),
    };

    config.module.rules.push({
      test: /\.(jpg|png|gif|svg|pdf)$/,
      use: [options.defaultLoaders.babel, { loader: "file-loader" }],
    });
    config.module.rules.push({
      test: /\.worker\.js$/,
      use: { loader: "worker-loader" },
    });

    return config;
  },
};
