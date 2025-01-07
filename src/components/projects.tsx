"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import Image from 'next/image';
import { DATA } from "@/data/resume";
import Section from "@/components/section";

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <BlurFade delay={0.05 * 11}>
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm font-medium shadow-lg">
              Featured Projects
            </div>
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent sm:text-5xl">
              My Creative Portfolio
            </h2>
            <p className="text-muted-foreground text-lg max-w-[600px] mx-auto">
              Explore my latest projects and creative works that showcase my skills and passion for development.
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[900px] mx-auto">
        {DATA.projects.map((project, id) => (
          <BlurFade key={project.title} delay={0.05 * 12 + id * 0.05}>
            <Dialog>
              <DialogTrigger asChild>
                <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
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
                  <div className="flex gap-4 mt-4">
                    {project.links?.map((link) => (
                      <Button
                        key={link.href}
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          {link.icon} {link.type}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
};

export default Projects;