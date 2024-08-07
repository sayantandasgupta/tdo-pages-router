import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

export const authOptions = {
    providers: [
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: "johndoe@email.com" },
                password: { label: 'Password', type: 'password' }
            },
            authorize(credentials, req) {
                const user = { id: '1', email: 'johndoe@gmail.com', password: 'johndoe@123' };

                if (user) {
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
    }
}

export default NextAuth(authOptions);