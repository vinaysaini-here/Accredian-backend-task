import prisma from "../config/connectdb.js";
import { sendReferralEmail } from "../services/emailService.js";

export const submitReferral = async (req, res) => {
  try {
    const { name, email, referredBy } = req.body;

    if (!name || !email || !referredBy) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const referral = await prisma.referral.create({
      data: { name, email, referredBy },
    });

    await sendReferralEmail(email, name, referredBy);
    res
      .status(201)
      .json({ message: "Referral submitted successfully", referral });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};
