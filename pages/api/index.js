import Config from "../../server/configs/config";

export default async (req, res) => {
  res.statusCode = 404;
  const response = {
    users: `${Config.BaseURL}/api/users`,
    categories: `${Config.BaseURL}/api/categories`,
    pages: `${Config.BaseURL}/api/pages`,
    posts: `${Config.BaseURL}/api/posts`,
  }

  res.json(response);
};
