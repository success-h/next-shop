module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8b37f001ce491b8235b74d17db5ebdd3'),
  },
});
