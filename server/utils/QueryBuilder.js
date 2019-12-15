class QueryBuilder {
  constructor(req){
    const query = req.query;

    if (query.q){
      let regEx = {};
      const searchQueries = JSON.parse(query.q);
      for (let [key, value] of Object.entries(searchQueries)) {
        regEx[`${key}`] = {
          $regex: value,
          $options: 'i',
        }
      }
      this.q = regEx;
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