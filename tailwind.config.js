module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-mono': ['"DM Mono"', 'monospace'],
      },
      colors: {
        void: '#121212',
        sub: '#1E1E1E',
        jewel: '#BB86FC',
        stark: '#00DAC6',
        into: '#E3E3E3',
        flyfin: {
          green: '#4AFFE0',
        },
      },
    },
  },
  plugins: [],
};
