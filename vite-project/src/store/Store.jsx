import { create } from "zustand";
export const useStore=create((set)=>({
    objectData:null,
    setObjectData:(value)=>set(()=>({objectData:value})),
    data:null,
    setData:(value)=>set(()=>({data:value})),
    inputOne:"",
    setInputOne:(value)=>set(()=>({inputOne:value})),
    inputTwo:"",
    setInputTwo:(value)=>set(()=>({inputTwo:value})),
}))