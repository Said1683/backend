import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
// definimos el modelo de nuestra tabla de datos excel
export const Datos = sequelize.define('dato', {
    UserID: {
        type: DataTypes.STRING,
    },
    UserName: {
        type: DataTypes.STRING
    },
    Date: {
        type: DataTypes.DATE
    },
    PunchIn: {
        type: DataTypes.TIME
    },
    PunchOut: {
        type: DataTypes.TIME
    }
}, { 
    timestamps: false
}) 