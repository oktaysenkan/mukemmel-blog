import UserRepository from "../../server/repository/UserRepository";

export default async (req, res) => {
  const response = await UserRepository.getAll()
  .then(response => ({ data: {
    users: response
  }})).catch(error => ({ error: {
    message: error
  }}))

  res.json(response);
};
