import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
// import { config } from "dotenv";

// config(); // Carrega as variáveis de ambiente do arquivo .env

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
});