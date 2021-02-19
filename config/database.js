module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: "localhost",
        port: 5432,
        database: "Rentgen",
        username: "postgres",
        password: "sergy",
      },
      options: {
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});