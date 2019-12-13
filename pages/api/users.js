import UserRepository from "../../server/repository/UserRepository";

export default async (req, res) => {
  const response = await UserRepository.getAll().then(response => {
    res.statusCode = 200;
    return { 
      data: {
        users: response
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
