/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html', // Include the root index.html
        './script.js',  // Include the root script.js
        './src/**/*.html', // If you have other HTML files in the src folder
        './src/**/*.js',   // If you have other JS files in the src folder
    ],

    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6',
                secondary: '#7928ca',
                accent: '#79ffe1',
                dark: {
                    secondary: '#7928ca',
                    accent: '#79ffe1',
                    text: '#fff',
                    'text-secondary': '#888',
                    background: '#000',
                    'background-secondary': '#111',
                    'background-tertitary': '#171717',
                    border: '#333'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            boxShadow: {
                'custom': '0 4px 14px rgba(0, 0, 0, 0.1)',
                'dark': '0 4px 14px rgba(0, 0, 0, 0.25)'
            },
            animation: {
                'morph': 'morph 8s ease-in-out infinite',
                'pulse-slow': 'pulse 10s infinite',
            },
            keyframes: {
                morph: {
                    '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                    '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
                    '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                },
                pulse: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.05)' },
                }
            }
        },
    },
    plugins: [],
}