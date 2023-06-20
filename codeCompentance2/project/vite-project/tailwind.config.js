/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        extend: {
            spacing: {
                "25": "6.25rem",
            },
            colors: {
                "primary-green": "#01CC8E",
                "second-gray-1": "#373B4C",
                "second-gray-2": "#272936"

            },
            keyframes: {
                moveUpDown: {
                    '0%, 100%': { transform: ' translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
            animation: {
                'moveUpDown': 'moveUpDown 3s  ease-in-out infinite',
            },
            backgroundImage: {
                'hero-pattern': "url('https://firebasestorage.googleapis.com/v0/b/mejo-personal-web.appspot.com/o/Frame%2049.png?alt=media&token=c6a4864b-ccbd-452c-bd86-5f7e9e9b5bed')",
            }
        }

    },
    plugins: [],
}

