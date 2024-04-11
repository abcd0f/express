import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class ListControllers {
  static async list(req, res) {
    try {
      const list = await prisma.list.findMany();
      res.status(200).json(list);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  static async delList(req, res) {
    const id = parseInt(req.params.id);
    try {
      await prisma.list.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
