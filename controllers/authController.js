import next from "next";
import User from "../models/user";

import catchAsyncErrors from "../middlewares/catchAsyncErrors";

//Register User ===> /api/auth/register
const registerUser = catchAsyncErrors(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "PUBLIC_ID",
      url: "url",
    },
  });
  res.status(200).json({
    success: true,
    message: "Account created successfully",
  });
});

export { registerUser };
