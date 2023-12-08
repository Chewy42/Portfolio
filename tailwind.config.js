module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: "#111",
        secondary: "#7c3aed",
        background: "#fff",
        accent: "#7c3aed",
        danger: "#ef4444",
        textPrimary: "#111",
        textSecondary: "#fff",
        cta: "#F87171",
        success: "#4ade80",
        info: "#3B82F6",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      boxShadow: {
        md: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        md: "0.5rem",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out',
        slideUp: 'slideUp 0.8s ease-out',
        slideLeft: 'slideLeft 0.8s ease-out',
        slideRight: 'slideRight 0.8s ease-out',
        float: 'float 3s ease-in-out infinite',
        scroll: 'scroll 1s ease-out',
      },
    },
  },
  plugins: [],
};
