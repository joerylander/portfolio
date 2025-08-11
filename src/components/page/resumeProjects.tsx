'use client';

import { useNavigateTo } from '@/lib/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { useFetch } from '@/lib/fetch';
import { ProjectItem } from '@/types/types';
import { ApiEndpoints } from '@/lib/constants';
import { ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

export default function ResumeProjects() {
  const { navigateNewTabURL } = useNavigateTo();
  const { data, loading } = useFetch<ProjectItem[]>(ApiEndpoints.projectItems);
  return (
    <>
      <header className="mb-16 text-center">
        <h2 className="h2-responsive font-bold capitalize">
          Portfolio Projects
        </h2>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {!loading &&
          data &&
          data.map((project) => (
            <Card
              key={project.id}
              className="hover:border-accent flex h-full flex-col border border-gray-700 bg-[#262626] text-white transition"
            >
              <CardHeader>
                <CardTitle className="flex flex-col capitalize">
                  {project.title}
                  {/* <span className="mt-1 text-xs font-normal text-gray-300">
                    {project.relatedExperience?.join(', ')}
                  </span> */}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <p className="mb-3 text-sm">
                  {project.description}
                  {project.impact && (
                    <>
                      <br />
                      <span className="font-semibold text-white/70">
                        {project.impact}
                      </span>
                    </>
                  )}
                </p>

                {/* Tech Stack */}
                <p className="mb-2 text-xs text-gray-300 sm:text-sm">
                  <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                </p>

                <p className="mb-4 text-xs text-gray-400 sm:text-sm">
                  <strong>Year:</strong> {project.startYear}{' '}
                  {project.endYear ? `- ${project.endYear}` : null}{' '}
                  &nbsp;|&nbsp;
                  <strong>Type:</strong> {project.type}
                </p>

                {project.externalLink && (
                  <Button
                    size="default"
                    className="mt-auto self-start bg-white/10 hover:bg-white/20"
                    onClick={() => navigateNewTabURL(project.externalLink)}
                  >
                    Visit site
                    <ExternalLink />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
}
