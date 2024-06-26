/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },
    webpackFinal: async (config) => {
        // Find the rule that handles CSS files
        const cssRule = config.module.rules.find((rule) =>
            "test.css".match(rule.test)
        );

        // Add SCSS support by duplicating the CSS rule and changing the test and loader
        config.module.rules.push({
            ...cssRule,
            test: /\.scss$/,
            use: [
                ...cssRule.use.map((use) => {
                    // Replace `css-loader` with `sass-loader`
                    if (
                        typeof use === "object" &&
                        use.loader &&
                        use.loader.includes("css-loader")
                    ) {
                        return {
                            ...use,
                            options: {
                                ...use.options,
                                importLoaders: 1,
                            },
                        };
                    }
                    return use;
                }),
                "sass-loader",
            ],
        });

        return config;
    },
};
export default config;
