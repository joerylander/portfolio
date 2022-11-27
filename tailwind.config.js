/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // NOTE: This is a special case where we need to use a CSS variable
      // for a background color that also has an opacity applied.
      // The opacityValue argument is automatically provided by Tailwind.
      // Use rgba() to apply the opacity to the CSS variable. NOT hexcode.        }
      colors: {
        'th-bg-base': withOpacity('--color-bg-base'),
        'th-bg-secondary': withOpacity('--color-bg-secondary'),
        'th-border-base': withOpacity('--color-border-base'),
        'th-border-circle': withOpacity('--color-border-circle'),
        'th-text-base': withOpacity('--color-text-base'),
        'th-highlight': withOpacity('--color-highlight'),
        'th-highlight-10': withOpacity('--color-highlight')({ opacityValue: 0.1 }),
        'th-highlight-50': withOpacity('--color-highlight')({ opacityValue: 0.5 }),
      }
    },
    plugins: [
      require('tailwind-scrollbar'),
      require("flowbite/plugin"),
    ],
  }
}
