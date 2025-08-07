"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/magicui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/magicui/dialog";
import { Badge } from "@/components/magicui/badge";
import { Button } from "@/components/magicui/button";
import BlurFade from "@/components/magicui/blur-fade";
import Image from 'next/image';
import { DATA } from "@/data/data";
import Section from "@/components/Containers/section";

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <BlurFade delay={0.05 * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            A collection of projects that showcase my expertise in development.
          </p>
        </div>
      </BlurFade>

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 xl:gap-8">
          {DATA.projects.map((project, id) => (
            <BlurFade key={project.title} delay={0.05 * 12 + id * 0.05}>
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group/card relative min-h-[380px] sm:min-h-[420px] w-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer border">
                    <div className="relative h-36 sm:h-48 w-full overflow-hidden flex-shrink-0">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <div className="flex flex-col flex-grow p-4 sm:p-6">
                      <CardTitle className="text-lg sm:text-xl mb-2 transition-colors group-hover/card:text-blue-500 line-clamp-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 text-muted-foreground text-sm sm:text-base flex-grow">
                        {project.description}
                      </CardDescription>
                      <div className="mt-auto pt-3 sm:pt-4">
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="text-xs bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge 
                              variant="secondary" 
                              className="text-xs bg-gray-500/10 text-gray-600 dark:bg-gray-500/20 dark:text-gray-400"
                            >
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>{project.description}</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    {project.image && (
                      <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {project.video && (
                      <div className="relative aspect-video mb-4">
                        <video
                          src={project.video}
                          controls
                          className="rounded-lg w-full"
                        />
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-4 mt-4">
                      {project.links?.map((link, index) => (
                        <Button
                          key={('href' in link ? link.href : `link-${index}`)}
                          variant="outline"
                          size="sm"
                          asChild={'href' in link}
                          className="hover:bg-blue-500/10 hover:text-blue-600 hover:border-blue-500/30 text-xs sm:text-sm"
                        >
                          {'href' in link ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              {link.icon} {link.type}
                            </a>
                          ) : (
                            <span className="flex items-center gap-2">
                              {link.icon} {link.type}
                            </span>
                          )}
                        </Button>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </BlurFade>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;