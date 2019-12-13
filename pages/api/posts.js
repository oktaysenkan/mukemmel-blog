import PostRepository from "../../server/repository/PostRepository";

export default async (req, res) => {
  const response = await PostRepository.getAll().then(response => {
    res.statusCode = 200;
    return { 
      data: {
        posts: response
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
