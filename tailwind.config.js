/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}", "./css/*.css", "./node_modules/flowbite/**/*.js", "./components/*.html",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
}