import CategoryRepository from "../../server/repository/CategoryRepository";

export default async (req, res) => {
  let response;

  try {
    const categories = await CategoryRepository.getAll(req);
    response = {
      data: {
        categories: categories
      }
    }
    res.statusCode = 200;
  } catch (error) {
    console.log(error.toString());
    response = {
      error: {
        message: error
      }
    }
    res.statusCode = 404;
  }

  res.json(response);
};
