import User from "../models/userModel.js";

export const checkUser = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    return null;
  }
};

export const createUser = async (email, password, username) => {
  try {
    const user = new User({ email, password, username });

    const savedUser = await user.save();
    return savedUser;
  } catch (error) {
    return null;
  }
};
