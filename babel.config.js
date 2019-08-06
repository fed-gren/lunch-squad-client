const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        browsers: ["> 0.25%", "not dead"]
      }
    }
  ],
  "@babel/preset-react"
];
const plugins = ["babel-plugin-styled-components"];

module.exports = { presets, plugins };
