import { NextApiRequest, NextApiResponse } from "next";
import { genSalt, hash } from "bcrypt";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, password } = req.body;

    if (req.body == null) return res.status(400).json({ message: 'Please enter the correct data' })

    const saltRounds: number = 10;
    const salt = await genSalt(saltRounds);

    const encryptedPass = await hash(password, salt);

    try {
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: encryptedPass,
            }
        })

        res.status(200).json({
            message: "Successfully registered user",
            data: { ...user }
        })
    } catch (error) {
        console.error("Failed to register user",)
        res.status(500).json({
            message: "Failed to create user",
        })
    }

}