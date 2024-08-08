import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { fetchUserByEmail } from "@/lib/data";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getServerSession(req, res, authOptions);

    if (!session) {
        res.status(401).json({ message: "You must be logged in." });
        return;
    }

    const email = String(session.user?.email);
    const user = await fetchUserByEmail(email);

    if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
    }

    try {
        const tasks = await prisma.task.findMany({
            where: {
                userId: user.id,
            }
        })

        res.status(200).json({ message: "All Tasks", data: { ...tasks } })
    } catch (error) {
        console.error("Failed to fetch all tasks", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

