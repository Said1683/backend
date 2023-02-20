import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
// definimos el modelo de nuestra tabla de usuarios
export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: { 
        type: DataTypes.STRING,
        allowNull: false
    } 
}, {
    timestamps: false
})