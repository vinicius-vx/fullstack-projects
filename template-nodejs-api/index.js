// index.js
import express from "express";
import sequelize from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json()); // Para habilitar o uso de JSON nas requisições
app.use(cors());

// Testar a conexão com o banco de dados
sequelize
  .authenticate()
  .then(() => console.log("Conexão com o banco de dados bem-sucedida."))
  .catch((err) => console.error("Erro ao conectar no banco:", err));

// Sincronizar o banco de dados (criar a tabela se não existir)
sequelize.sync();

// Usar as rotas de usuários
app.use(userRoutes);

// Iniciar o servidor
app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
