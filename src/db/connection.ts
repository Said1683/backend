import { Sequelize } from "sequelize";

// parametros para la conexión a la base de datos (Nombre, usuario, password)
const sequelize = new Sequelize('keyence', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',   
});
 
export default sequelize;