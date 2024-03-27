import { Rfq } from "../models/rfq.js";

export const rfq = async (req, res, next) => {
  const { name, comp_name, email, product, thickness, grade, qnt } = req.body;

  await Rfq.create({
    name, comp_name, email, product, thickness, grade, qnt, user: req.user
  })
  res.status(201).json({
    success: true,
    message: "Task added Successfully",
  })

}


