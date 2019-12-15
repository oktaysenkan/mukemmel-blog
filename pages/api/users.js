import UserRepository from "../../server/repository/UserRepository";

export default async (req, res) => {
  let response;

  try {
    const users = await UserRepository.getAll();
    response = {
      data: {
        users: users
      }
    }
    res.statusCode = 200;
  } catch (error) {
    response = {
      error: {
        message: error
      }
    }
    res.statusCode = 404;
  }

  res.json(response);
};
