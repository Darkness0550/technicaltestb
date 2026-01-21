module.exports = {
  apps: [
    {
      name: 'darkness-api',
      script: 'dist/src/main.js',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '1G',
      env_file: '.env',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
