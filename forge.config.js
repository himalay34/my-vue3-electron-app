var fs = require("fs");

module.exports = {
  packagerConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "vue3_webpack_electron_forge",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./webpack.main.config.js",
        renderer: {
          config: "./webpack.renderer.config.js",
          entryPoints: [
            {
              html: "./src/index.html",
              js: "./src/renderer.ts",
              name: "main_window",
            },
          ],
        },
      },
    ],
  ],
  hooks: {
    generateAssets: async (forgeConfig, platform, arch) => {
      console.log("Generating asset ");
    },
    postStart: async (forgeConfig, platform, arch) => {
      console.log("postStart hook called");
    },
    readPackageJson: async (forgeConfig, platform, arch) => {
      console.log("reading package.json");
      try {
        console.log("copy db file");
        //   fs.copyFile('./.webpack/renderer/main_window/native_modules/billing_app_v2.db', './src/db/billing_app_v2.db', (err) => {
        //       if (err) console.log(err);
        //       console.warn('\n\ndb was copied to destination\n\n');// every time webpack runs, it will copy new db to .webpack folder with this we can save old dband use the same again
        //     });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
