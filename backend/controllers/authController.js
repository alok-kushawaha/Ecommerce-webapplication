import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please provide all mandatory fields",
      });
    }

    const existemail = await User.findOne({ email });
    if (existemail) {
      return res.status(409).send({
        success: false,
        message: "email already exist",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashpassword,
    });

    res.send({
      success: true,
      message: "successfully signup",
      user: newUser,
    });
  } catch (error) {
    res.send({
      success: false,
      message: "error in signup page",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.send({
      success: false,
      message: "provide the fields",
    });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.send({
      success: false,
      message: "user is invalid",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.send({
      success: false,
      message: "id and pass are worng",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

  return res.send({
    success: true,
    message: "login succesfully",
    token,
    userid: user._id,
    user,
  });
};

export const updateProfile = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).send({
        success: false,
        message: "User not authenticated",
      });
    }

    const currentUser = await User.findById(userId);
    if (!currentUser) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    const name = (req.body.name || currentUser.name).trim();
    const email = (req.body.email || currentUser.email).trim();

    if (!name || !email) {
      return res.status(400).send({
        success: false,
        message: "Name and email are required",
      });
    }

    if (email !== currentUser.email) {
      const existingUser = await User.findOne({ email, _id: { $ne: userId } });
      if (existingUser) {
        return res.status(409).send({
          success: false,
          message: "Email already in use",
        });
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email },
      { new: true }
    );

    return res.send({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error updating profile",
    });
  }
};


