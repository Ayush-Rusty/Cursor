/* eslint-disable react-hooks/purity */
import { useMutation, useQuery } from "convex/react";
import {api} from "../../../../convex/_generated/api"
import { Id } from "convex/_generated/dataModel";


export const UseProjects=()=>{
    return useQuery(api.project.get,{limit:10})
}

export const UseProjectsPartial=(limit:number)=>{
    return useQuery(api.project.getPartial,{limit})
}

export const useCreateProject=()=>{
    
    return useMutation(api.project.create).withOptimisticUpdate(
        (localStore,args)=>{
            const existingProjects=localStore.getQuery(api.project.get,{limit:10})
            if(existingProjects!==undefined){
                const now=Date.now();
                const newProject={
                    _id:crypto.randomUUID() as Id<"projects">,
                    _creationTime:now,
                    name:args.name,
                    ownerId:"anonymous",
                    updatedAt:now
                 };
                 localStore.setQuery(api.project.get,{limit:10},[
                    newProject,
                    ...existingProjects,
                 ])
            }
        }
    )
}