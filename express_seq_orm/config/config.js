//1.导入Sequelize模块
import Sequelize from 'sequelize';

//new Sequelize('数据库名','用户名','密码',{配置信息})
//2.使用sequelize模块配置和数据库的连接信息：创建连接数据库的对象
const dbConfig = new Sequelize('db', 'root', 'admin123', {
  host: 'localhost', //数据库服务器的IP地址或域名
  port: 3306, //数据库使用的端口号。MySQL数据库的默认端口号是3306
  dialect: 'mysql', //数据库的类型
  pool: {
    //数据库连接池：放若干个数据库的连接对象，提高数据库的访问效率
    max: 20, //数据库连接池中连接对象的最大个数
    min: 3, //数据库连接池中连接对象的最少个数
    idle: 20000, //等待延迟的时间，单位是毫秒
  },
  define: {
    charset: 'utf8', //处理Mysql中中文字符问题
  },
});
//3.导出数据库的连接对象

export default dbConfig;
