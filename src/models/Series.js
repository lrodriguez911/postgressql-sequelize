import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'


export const Series = sequelize.define('series',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fecha_de_estreno: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  estrellas: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precio_alquiler: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  atp: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  } 
})