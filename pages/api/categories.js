import CategoryRepository from "../../server/repository/CategoryRepository";

export default async (req, res) => {
  const response = await CategoryRepository.getAll().then(response => {
    res.statusCode = 200;
    return { 
      data: {
        categories: response
      }
    }
  }).catch(error => {
    res.statusCode = 404;
    return {
      error: {
        message: error
      }
    }
  })

  res.json(response);
};
