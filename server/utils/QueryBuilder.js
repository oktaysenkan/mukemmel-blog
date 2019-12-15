class QueryBuilder {
  constructor(req){
    const query = req.query;

    if (query.q){
      this.q = JSON.parse(query.q);
    } else {
      this.q = {};
    }

    if (query.sort){
      this.sort = query.sort;
    } else {
      this.sort = '_id';
    }

    if (query.count) {
      this.count = parseInt(query.count)
    } else {
      this.count = 10;
    }

    if (query.page) {
      this.skip = parseInt((query.page - 1) * this.count)
    } else {
      this.skip = 0;
    }
  }
}

export default QueryBuilder;