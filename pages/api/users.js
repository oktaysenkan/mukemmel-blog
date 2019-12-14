import UserRepository from "../../server/repository/UserRepository";

export default async (req, res) => {
  UserRepository.getAll().then(response => {
    res.statusCode = 200;
    res.json({ 
      data: {
        users: response
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
