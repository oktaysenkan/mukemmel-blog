import UserRepository from "../../server/repository/UserRepository";

export default async (req, res) => {
  let response;

  try {
    const users = await UserRepository.getAll(req);
    response = {
      data: {
        users: users
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
