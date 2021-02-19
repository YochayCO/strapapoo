module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: `${process.env.DATABASE_HOST || "localhost"}`,
        port: `${process.env.DATABASE_PORT || 5432}`,
        database: `${process.env.DATABASE_NAME || "Rentgen"}`,
        username: `${process.env.DATABASE_USERNAME || "postgres"}`,
        password: `${process.env.DATABASE_PASSWORD || "sergy"}`,
      },
      options: {
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});