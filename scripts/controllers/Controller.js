class Controller {
  constructor(service) {
    this.service = service;
    this.find = this.find.bind(this);
    this.findAll = this.findAll.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async find(req, res) {
    return res.status();
  }
}
