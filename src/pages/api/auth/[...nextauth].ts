import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { compare } from "bcrypt";

export const authOptions = {
    providers: [
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: "johndoe@email.com" },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials as { email: string, password: string };

                const user = await prisma.user.findFirst({
                    where: {
                        email: email,
                    }
                });

                if (!user) return Promise.resolve(null);

                const existingPass = user.password;
                const passwordsMatch = await compare(password, existingPass);

                if (passwordsMatch) {
                    return Promise.resolve(user);
                } else {
                    return Promise.resolve(null);
                }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login'
    },
    adapter: PrismaAdapter(prisma),
}

export default NextAuth(authOptions);