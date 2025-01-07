import { useCallback, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from "@/lib/utils";
import Safari from "@/components/ui/safari";
import Android from "@/components/ui/android";

interface PreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
      title: string;
      href?: string;
      image?: string;
      video?: string;
    };
  }
  
  // export default function PreviewModal({ isOpen, onClose, project }: PreviewModalProps) {
  //   if (!isOpen) return null;
  
  //   const isMobileProject = project.title === "Mujur Reborn Mobile";
  
  //   return (
  //     <div 
  //       className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm cursor-pointer overflow-auto p-4 md:p-8"
  //       onClick={onClose}
  //     >
  //       <div 
  //         className="w-[95vw] max-w-[1800px] transform transition-all duration-300 ease-in-out"
  //         onClick={(e: React.MouseEvent) => e.stopPropagation()}
  //       >
  //         {isMobileProject ? (
  //           <div className="max-w-xs mx-auto">
  //             <Android
  //               src={project.image}
  //               videoSrc={project.video}
  //               className="w-full h-full object-cover"
  //             />
  //           </div>
  //         ) : (
  //           <Safari
  //             imageSrc={project.image}
  //             videoSrc={project.video}
  //             url={project.href}
  //             className="w-full h-auto"
  //           />
  //         )}
  //       </div>
  //     </div>
  //   );
  // }
  
  export default function PreviewModal({ isOpen, onClose, project }: PreviewModalProps) {
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      }
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [isOpen]);
  
    if (!mounted || !isOpen) return null;
  
    const isMobileProject = project.title === "Mujur Reborn Mobile";
    
    const modalContent = (
      <div 
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop - now covers entire screen */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-md"
          aria-hidden="true"
        />
        
        {/* Content container */}
        <div 
          className={cn(
            "relative mx-auto",
            isMobileProject ? "w-auto max-w-sm" : "w-[90%] max-w-[900px]"
          )}
        >
          <div className="w-full">
            {isMobileProject ? (
              <div className="transform transition-all duration-300 ease-in-out">
                <Android
                  src={project.image}
                  videoSrc={project.video}
                  className="w-full h-auto"
                />
              </div>
            ) : (
              <div className="transform transition-all duration-300 ease-in-out">
                <Safari
                  imageSrc={project.image}
                  videoSrc={project.video}
                  url={project.href}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  
    return createPortal(
      modalContent,
      document.body
    );
  }