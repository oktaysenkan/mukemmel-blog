import UserRepository from "../../../server/repository/UserRepository";

export default async (req, res) => {
  const response = await UserRepository.save({
    fullName: req.query.userId
  }).then(response => {
    res.statusCode = 201;
    return {
      data: {
        user: response
      }
    }
  }).catch(error => {
    res.statusCode = 404;
    return {
      error: {
        message: error
      }
    }
  });

  res.json(response);
};
