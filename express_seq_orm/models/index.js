import { DataTypes } from 'sequelize';
import db from '../config/config.js';

const List = db.define(
  'list',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true, // 模型名等于表名
    timestamps: false, // 关闭时间戳
  },
);

// 同步当前模型
List.sync({ alter: true }).then(() => {
  console.log('当前模型同步完成');
});

export default List;
