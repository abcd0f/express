import db from '../config/dbconfig.js';

const ListService = {
  List: async () => {
    const sql = `SELECT * FROM LIST`;
    const data = await db.query(sql, '');
    return data;
  },
};

export default ListService;
