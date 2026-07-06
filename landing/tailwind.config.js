/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vm: {
          brand: '#2A8A86',
          'brand-hover': '#1E7572',
          'brand-dark': '#1A5E5C',
          'brand-soft': '#E8F5F4',
          'brand-soft-2': '#F0FAF9',
          'logo-teal': '#006B6E',
          'logo-gray': '#32353E',
          surface: '#F8FAFB',
          border: '#E2E8F0',
          text: '#1A202C',
          'text-muted': '#64748B',
          'text-soft': '#94A3B8',
          whatsapp: '#25D366',
          success: '#1DA851',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'card': '0 2px 8px #00000014',
        'card-hover': '0 8px 24px #0000001f',
        'navbar': '0 1px 3px #00000014',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
