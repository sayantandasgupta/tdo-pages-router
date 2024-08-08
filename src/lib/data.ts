import prisma from "./prisma";

// User Data Fetch

export async function fetchUserByEmail(email: string) {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            }
        })

        return user;
    } catch (error) {
        console.error("Failed to fetch user", error)
        return null;
    }
}
