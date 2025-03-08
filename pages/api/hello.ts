// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
    msg: string
    app: string
    version: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        msg: 'Myster 神秘陌生人',
        app: 'linktreez',
        version: '1.0',
    })
}
