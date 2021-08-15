class Service {
  constructor(model, connection) {
    this.model = connection.define(model);
    this.insert = this.insert.bind(this);
  }

  async insert(data) {
    try {
      const item = await this.model.create(data);
      return {
        error: false,
        statusCode: 200,
        item,
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.errmsg || "Unable to create item",
        errors: error.errors,
      };
    }
  }

  async update(id, data) {
    try {
      const item = await this.model.update({ ...data }, { where: { id: id } });
      return {
        error: false,
        statusCode: 200,
        item,
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.errmsg || "Unable to create item",
        errors: error.errors,
      };
    }
  }

  async find(id) {
    try {
      const item = await this.model.findOne({ where: { id: id } });
      return {
        error: false,
        statusCode: 200,
        item,
      };
    } catch (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.errmsg || "Unable to create item",
        errors: error.errors,
      };
    }
  }
}

export default Service;
