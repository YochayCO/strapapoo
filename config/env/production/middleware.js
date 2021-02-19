module.exports = ({ env }) => {
  if (!env('GILUY_NAOT_URL')) return {};

  return {
    settings: {
      cors: {
        origin: [env('HEROKU_URL'), env('GILUY_NAOT_URL')],
      },
    },
  }
};
