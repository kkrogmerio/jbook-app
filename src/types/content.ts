import { Cell } from "./cell";
export interface ShareContentRequest{
   cells:{
        [key: string]: Cell;
    },
    bundles?:{
        [key:string]: {code:string} | undefined
    }

}
export interface ShareContentResponse{
    shareId:string;
}
export interface FetchContentRequest{
    shareId:string;
}
export interface FetchContentResponse{
    cells:{
        data: {[key: string]: Cell;}
        order: string[];
     },

     bundles?:{
         [key:string]: {code:string;err:string} | undefined
     }
 
 }