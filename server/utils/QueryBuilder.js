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
    }

    if (query.sort){
      this.sort = query.sort;
    }

    if (query.count) {
      this.count = parseInt(query.count);
    } else {
      this.count = 10;
    }

    if (query.page) {
      this.skip = parseInt((query.page - 1) * this.count);
    }

    if (query.fields) {
      const fields = query.fields.split(',');
      const $aproject = {};
      fields.map(field => {
        $aproject[field] = 1;
      });

      this.fields = fields.join(' ');
    }
  }
}

export default QueryBuilder;