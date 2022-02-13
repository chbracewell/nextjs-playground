// https://randomuser.me/api/?results=5000

import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const users = await axios.get("https://randomuser.me/api/?results=10");
  console.log(users);
  const payload = users.data.results;

  res.status(200).json(payload);
};
