import { NextApiRequest, NextApiResponse } from 'next';
import data from './data';

type Trending = {}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Trending>
) {
    const Trending = data.Trending
    if(Trending) return res.status(200).json(Trending)
    return res.status(404).json({ error: "Data Not Found"})
}