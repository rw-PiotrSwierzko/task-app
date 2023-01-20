module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    '@storybook/addon-a11y',
  ],
  staticDirs: ['../public'],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  managerWebpack: (config, options) => {
    options.cache.set = () => Promise.resolve();
    return config;
  }
}
