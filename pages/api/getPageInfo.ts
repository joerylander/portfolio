import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from 'next-sanity'
import { sanityClient } from "../../sanity"
import { PageInfo } from "../../typings"

const query = groq`
  *[_type == "pageInfo"][0]
`

type Data = {
  pageInfo: PageInfo[]
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const pageInfo: Data[] = await sanityClient.fetch(query)

  res.status(200).json({ pageInfo })
}