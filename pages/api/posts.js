import PostRepository from "../../server/repository/PostRepository";

export default async (req, res) => {
  let response;

  try {
    const posts = await PostRepository.getAll(req);
    response = {
      data: {
        posts: posts
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
