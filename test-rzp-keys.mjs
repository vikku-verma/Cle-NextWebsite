import dotenv from "dotenv";
dotenv.config();

const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_CREDENTIAL;
const key_secret = process.env.RAZORPAY_KEY_SECRET;
console.log({ key_id, key_secret });
