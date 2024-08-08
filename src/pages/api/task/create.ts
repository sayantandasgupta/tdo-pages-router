import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { revalidatePath } from "next/cache";
import { fetchUserByEmail } from "@/lib/data";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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

    const { task } = req.body;

    try {
        const newTask = await prisma.task.create({
            data: {
                task: task,
                userId: user.id,
            }
        });

        revalidatePath('/dashboard');
        return res.status(200).json({ message: "New Task Created", data: { ...newTask } });
    } catch (error) {
        console.error("Failed to create task", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}