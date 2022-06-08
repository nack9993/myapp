import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (token) {
      let user;

      try {
        // ทำการหา ID จาก key ที่เราเก็บ
        const { id } = jwt.verify(token, "hello");
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) {
          throw new Error("Not real user");
        }
      } catch (eror) {
        res.status(401);
        res.json({ error: "Not Authorizied" });
      }

      return handler(req, res, user);
    }
  };
};

export const validateToken = (token) => {
  const user = jwt.verify(token, "hello");

  return user;
};
