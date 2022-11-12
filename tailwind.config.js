/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (!opacityValue) {
      return `rgb(var(${variableName}))`;
    }
    return `rgba(var(${variableName}), ${opacityValue})`;
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
          highlight: 'var(--color-highlight)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-accent-hover)',
          'button-muted': withOpacity('--color-button-muted'),

          // NOTE: This is a special case where we need to use a CSS variable
          // for a background color that also has an opacity applied.
          // The opacityValue argument is automatically provided by Tailwind.
          // Use rgba() to apply the opacity to the CSS variable. NOT hexcode.        }
        },
        gradientColorStops: {
          skin: {

          }
        },
      },
    },
    plugins: [
      require('tailwind-scrollbar')
    ],
  }
}
