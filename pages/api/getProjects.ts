import type { NextApiRequest, NextApiResponse } from "next"
import { groq } from 'next-sanity'
import { sanityClient } from "../../sanity"
import { Project } from "../../typings"

const query = groq`
  *[_type == "project"] {
    ...,
    technologies[]->
  }
`

type Data = {
  projects: Project[]
}

const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  const projects: Data[] = await sanityClient.fetch(query)

  res.status(200).json({ projects })
}

export default getProjects