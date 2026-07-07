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

export const ProjectsCommandsDialog=({open,onOpenChange}:ProjectsCommandsDialogProps)=>{
    const router=useRouter();
    const projects=useProjects();

    const handleSelect=(projectId:string)=>{
        router.push(`/projects/${projectId}`);
        onOpenChange(false);
    }

    
}