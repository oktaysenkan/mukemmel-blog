import CommentRepository from "../../server/repository/CommentRepository";

export default async (req, res) => {
  let response;

  try {
    const comments = await CommentRepository.getAll(req);
    response = {
      data: {
        comments: comments
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
