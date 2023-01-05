import { NextApiRequest, NextApiResponse } from 'next';
import data from './data';

type Popular = {}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Popular>
) {
    const Popular = data.Popular
    if(Popular) return res.status(200).json(Popular)
    return res.status(404).json({ error: "Data Not Found"})
}