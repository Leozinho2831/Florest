/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '.5rem',
                sm: '1rem',
            },
        },
        extend: {
            colors: {
                verde: {
                  200: '#ACEF75',
                  300: '#91EE77',
                  400: '#17E880',
                  700: '#2E482C',
                  800: '#16281F',
                  900: '#0F1C15',
                  950: '#030504',
                },
            },
            keyframes: {
                slideIn: {
                    '0%': {
                        opacity: 0, 
                        transform: 'translate(-20px)'
                    },
                    '100%': {
                        opacity: 1, 
                        transform: 'translate(0)'
                    },
                }
            },
            animation: {
                slideIn: 'slideIn 0.5s ease-in-out forwards',
            }
        },
        screens: {
            'mobile': '480px',
            'tablet': '768px',
            'desktop': '1024px',
        }
    },
    plugins: [plugin(({ addUtilities }) => {
        function animationDelay() {
            const delays = {};
    
            for (let i = 0; i <= 12; i++) {
                delays[`.animate-${i}`] = {
                    'animation-delay': `${i * 0.1}s`
                };
            }
    
            return delays;
        }
        addUtilities(animationDelay());
    })],
};
