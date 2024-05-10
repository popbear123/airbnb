const CracoLessPlugin = require("craco-less");
const path = require("path")

function getAbsolutePath(name) {
  console.log(path.resolve(__dirname, name));
  return path.resolve(__dirname, name)
}

module.exports = {
  plugins: [
    { plugin: CracoLessPlugin }
  ],

  webpack: {
    alias: {
      "@": getAbsolutePath("src")
    }
  }
};