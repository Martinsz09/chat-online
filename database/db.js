
const mongoose = require('mongoose');

function connectDB() {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("🟢 Conectado ao MongoDB com .env"))
  .catch((err) => console.error("🔴 Erro ao conectar:", err));
}

module.exports = connectDB;
