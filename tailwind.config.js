/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('https://img.freepik.com/foto-gratis/arreglo-articulos-viaje-bodegon_23-2149617684.jpg?w=740&t=st=1691146572~exp=1691147172~hmac=4a5a5e71debb5696ac5beb953a0974dd581e2bdb6a3f1aa4d150817086fe17fb')", 
        'signin-background': "url('https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      },
    },
    fontFamily: {
      customFont1: ['Preahvihear-Regular'],
      customFont2: ['Chicle-Regular'],
      customFont3: ['letter_blocks']
    }
  },
  plugins: [require("daisyui")],
}

