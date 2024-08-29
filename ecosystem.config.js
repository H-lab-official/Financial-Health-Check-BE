// module.exports = {
//   apps: [
//     {
//       name: 'financial-health-check-be',
//       script: 'index.js',
//       interpreter: 'node', 
//       watch: '.',
//       env: {
//         NODE_ENV: 'development'
//       },
//       env_production: {
//         NODE_ENV: 'production'
//       }
//     }
//   ],

//   deploy: {
//     production: {
//       user: 'SSH_USERNAME',
//       host: 'SSH_HOSTMACHINE',
//       ref: 'origin/master',
//       repo: 'GIT_REPOSITORY',
//       path: 'DESTINATION_PATH',
//       'pre-deploy-local': '',
//       'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production', 
//       'pre-setup': ''
//     }
//   }
// };
module.exports = {
  apps: [
    {
      name: 'financial-health-check-be',
      script: 'index.js',
      interpreter: 'node',
      instances: 'max', 
      exec_mode: 'cluster', 
      watch: process.env.NODE_ENV === 'development' ? '.' : false,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      log_date_format: "YYYY-MM-DD HH:mm Z",
      error_file: "./logs/pm2_errors.log",
      out_file: "./logs/pm2_out.log",
      merge_logs: true,
      max_restarts: 10, // จำกัดจำนวนการรีสตาร์ทในกรณีที่เกิดข้อผิดพลาด
      restart_delay: 5000 // เวลาที่รอหลังจากเกิดข้อผิดพลาดก่อนทำการรีสตาร์ท
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
      'post-deploy': 'npm install && pm2 reload ecosystem.config.cjs --env production',
      'pre-setup': ''
    }
  }
};
