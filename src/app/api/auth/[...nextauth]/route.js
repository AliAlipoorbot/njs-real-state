import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";

export const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("Error In Connecting To DB!");
        }

        if (!email || !password) throw new Error("Invalid Data!");

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const isValidEmail = emailRegex.test(email);

        if (!isValidEmail) throw new Error("Enter Valid Email Address!");

        const user = await User.findOne({ email });
        if (!user) throw new Error("User Doesn't Exist!");

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("Username Or Password Is Incorrect!");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
