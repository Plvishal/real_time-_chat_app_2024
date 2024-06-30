import User from '../model/user.model.js';

export const register = async (req, res) => {
  const { email, password, name } = req.body;
  console.log(email, password, name);
  const user = await User.findOne({ email });
  res.send({ user });
};
