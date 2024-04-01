import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class ListControllers {
  static async list(req, res) {
    try {
      const list = await prisma.list.findMany();
      res.render('index', { list });
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

  static async getAll(model) {
    try {
      return await prisma[model].findMany();
    } catch (error) {
      throw new Error(`Error getting all ${model}: ${error.message}`);
    }
  }

  static async getById(model, id) {
    try {
      return await prisma[model].findUnique({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error(`Error getting ${model} by id ${id}: ${error.message}`);
    }
  }

  static async create(model, data) {
    try {
      return await prisma[model].create({
        data: data,
      });
    } catch (error) {
      throw new Error(`Error creating ${model}: ${error.message}`);
    }
  }

  static async update(model, id, data) {
    try {
      return await prisma[model].update({
        where: {
          id: id,
        },
        data: data,
      });
    } catch (error) {
      throw new Error(`Error updating ${model} with id ${id}: ${error.message}`);
    }
  }

  static async delete(model, id) {
    try {
      return await prisma[model].delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      throw new Error(`Error deleting ${model} with id ${id}: ${error.message}`);
    }
  }
}
