import PageRepository from "../../server/repository/PageRepository";

export default async (req, res) => {
  let response;

  try {
    const pages = await PageRepository.getAll(req);
    response = {
      data: {
        pages: pages
      }
    }
    res.statusCode = 200;
  } catch (error) {
    console.log(error.toString());
    response = {
      error: {
        message: error.toString()
      }
    }
    res.statusCode = 404;
  }

  res.json(response);
};
