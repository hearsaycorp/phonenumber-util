export default {
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      reporter: ['text', 'json-summary', 'html'],
      include: ['src/**/*.js'],
      exclude: ['src/**/*.test.js', 'src/__tests__/**'],
    },
  },
};
