module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // Criar ceatedAt e updatedAt
    underscored: true, // Gera padrão nome_nome
    underscoredAll: true,
  },
};
