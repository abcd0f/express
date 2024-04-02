import List from '../models/index.js';

export default class ListControllers {
  static async list(req, res) {
    try {
      List.create({ name: 'zhangsan', age: '18' }).then(result => {
        res.send(result);
      });
    } catch (error) {}
  }
}
