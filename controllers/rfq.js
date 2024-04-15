import { Rfq } from "../models/rfq.js";
export const rfq = async (req, res, next) => {
  const { name, comp_name, email, product, thickness, grade = [], qnt } = req.body;

  try {
    // Create a new RFQ document in the database
    await Rfq.create({
      name,
      comp_name,
      email,
      product,
      thickness,
      grade,
      qnt,
      SendAt: new Date(), // Automatically set the current date
      user: req.user // Assuming you have user information attached to the request
    });

    // Send a success response
    res.status(201).json({
      success: true,
      message: "Request Submitted Successfully, Please Login",

    });
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to add task",
      error: error.message // Optionally, send the error message in the response

    });
  }
};


