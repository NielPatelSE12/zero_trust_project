import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from "@/src/lib/prisma";
import { Post } from '@prisma/client';

// POST /api/trackingdata
// Required fields in body: title
// Optional fields in body: content

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const { title, content } = req.body;

    const session = await getSession({ req });
    if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const result: Post = await prisma.post.create({
            data: {
                title: title,
                content: content,
            },
        });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
