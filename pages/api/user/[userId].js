import UserRepository from "../../../server/repository/UserRepository";

export default async (req, res) => {
  const response = await UserRepository.save({
    name: 'Test2'
  }).then(r => ({ data: {
    user: r
  }})).catch(error => ({ error: {
    message: error
  }}))
  
  res.json(response);
};
