import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from 'next-sanity'
import { sanityClient } from "../../sanity"
import { Social } from "../../typings"

const query = groq`
  *[_type == "social"] 
`

type Data = {
  socials: Social[]
}

const getSocials = async (req: NextApiRequest, res: NextApiResponse) => {
  const socials: Data[] = await sanityClient.fetch(query)

  res.status(200).json({ socials })
}

export default getSocials