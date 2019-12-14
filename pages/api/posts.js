import PostRepository from "../../server/repository/PostRepository";

export default async (req, res) => {
  PostRepository.getAll().then(response => {
    res.statusCode = 200;
    res.json({ 
      data: {
        posts: response
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
