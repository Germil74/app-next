const withImages = require("next-images");
// module.exports = {
//     webpackDevMiddleware: config => {
//       config.watchOptions = {
//         poll: 1000,
//         aggregateTimeout: 300,
//       }

//       return config
//     }
  
//   }
  module.exports = withImages();
  // module.exports = {
  //   webpack(config) {
  //     config.module.rules.push({
  //       test: /\.svg$/,
  //       use: ["@svgr/webpack"]
  //     });
  
  //     return config;
  //   }
  // };