import { Avatar, AvatarFallback, AvatarImage } from "@/components/magicui/avatar";
import { Badge } from "@/components/magicui/badge";
import { Card, CardHeader } from "@/components/magicui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface EducationCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const EducationCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: EducationCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <Card className="flex p-6 hover:shadow-lg transition-all duration-300 bg-card border-2 hover:border-primary/20 hover:bg-accent/50">
        <div className="flex-none">
          <Avatar className="border-2 size-16 m-auto bg-background shadow-md">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain p-2"
            />
            <AvatarFallback className="bg-muted">{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-6 items-center flex-col group">
          <CardHeader className="p-0">
            <div className="flex items-center justify-between gap-x-4 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold text-sm sm:text-base">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-2 ml-2">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs bg-secondary/80"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-5 ml-2 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-sm sm:text-base tabular-nums text-muted-foreground font-medium">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-sm mt-2 text-muted-foreground/80">
                {subtitle}
              </div>
            )}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-4 text-sm sm:text-base leading-relaxed"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </Link>
  );
};