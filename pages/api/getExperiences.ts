import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from 'next-sanity'
import { sanityClient } from "../../sanity"
import { Experience } from "../../typings"

const query = groq`
  *[_type == "experience"] {
    ...,
    technologies[]->
  }
`

type Data = {
  experiences: Experience[]
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const experiences: Data[] = await sanityClient.fetch(query)

  res.status(200).json({ experiences })
}
