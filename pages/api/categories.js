import CategoryRepository from "../../server/repository/CategoryRepository";

export default async (req, res) => {
  CategoryRepository.getAll().then(response => {
    res.statusCode = 200;
    res.json({ 
      data: {
        categories: response
      }
    });
  }).catch(error => {
    res.statusCode = 404;
    res.json({
      error: {
        message: error
      }
    });
  })
};
