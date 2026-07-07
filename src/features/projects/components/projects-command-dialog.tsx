import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { AlertCircleIcon, GlobeIcon, Loader2Icon } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { useProjects } from "../hooks/use-projects";
import { Doc } from "../../../../convex/_generated/dataModel";

interface ProjectsCommandsDialogProps{
    open:boolean;
    onOpenChange:(open:boolean)=>void;
}


const getProjectIcon = (project: Doc<"projects">) => {
  if (project.importStatus === "completed") {
    return <FaGithub className="size-3.5 text-muted-foreground" />
}

  if (project.importStatus === "failed") {
    return <AlertCircleIcon className="size-3.5 text-muted-foreground" />;
  }

  if (project.importStatus === "importing") {
    return (
      <Loader2Icon className="size-3.5 text-muted-foreground animate-spin" />
    );
  }

  return <GlobeIcon className="size-3.5 text-muted-foreground" />;
}

export const ProjectsCommandsDialog=({open,onOpenChange}:ProjectsCommandsDialogProps)=>{
    const router=useRouter();
    const projects=useProjects();

    const handleSelect=(projectId:string)=>{
        router.push(`/projects/${projectId}`);
        onOpenChange(false);
    }


}