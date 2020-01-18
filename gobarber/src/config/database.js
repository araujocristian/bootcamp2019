require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // Criar ceatedAt e updatedAt
    underscored: true, // Gera padrão nome_nome
    underscoredAll: true,
  },
};
