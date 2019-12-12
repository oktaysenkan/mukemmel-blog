import UserRepository from "../../../server/repository/UserRepository";

export default async (req, res) => {
  const response = await UserRepository.save({
    name: req.query.userId
  }).then(r => ({ data: {
    user: r
  }})).catch(error => ({ error: {
    message: error
  }}))
  
  res.json(response);
};
