module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd8cffad2e9b76a7580d60b1dc9d32c4f'),
  },
});
