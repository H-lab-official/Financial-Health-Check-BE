module.exports = {
  apps: [
    {
      name: 'financial-health-check-be',
      script: 'index.js',
      interpreter: 'node', // Specify Node.js as the interpreter
      watch: '.',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production', // Using npm for install
      'pre-setup': ''
    }
  }
};
