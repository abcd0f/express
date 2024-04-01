import ListService from '../services/index.js';

const ListController = {
  list: async (req, res) => {
    try {
      const data = await ListService.List();
      console.log(data);
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  },
};

export default ListController;
