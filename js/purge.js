const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgecss({
      content: ["./**/*.html"],
    }),
  ],
};
// Example
const handleClick = () => console.log("Clicked");
document.addEventListener("click", handleClick);

// Remove listener when no longer needed
document.removeEventListener("click", handleClick);

localStorage.clear();
