import bcrypt from "bcryptjs";
import { checkUser, createUser } from "../services/userServices.js";

export const signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const exist = await checkUser(email);
    console.log(exist);
    if (exist) {
      return res.status(400).json({ message: "User Already Exist" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await createUser(email, hashedPassword, username);
    return res
      .status(200)
      .json({ userId: user?._id, message: "SignUp Success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
