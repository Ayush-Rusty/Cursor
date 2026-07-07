import { useMutation, useQuery } from "convex/react";
import {api} from "../../../../convex/_generated/api"

export const UseProjects=()=>{
    return useQuery(api.project.get,{limit:10})
}

export const UseProjectsPartial=(limit:number)=>{
    return useQuery(api.project.getPartial,{limit})
}

export const useCreateProject=()=>{
    return useMutation(api.project.create);
}