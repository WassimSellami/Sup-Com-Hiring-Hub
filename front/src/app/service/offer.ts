import { User } from "./user"

export class Offer{
    id:number
    name:String
    description:String 
    type:String 
    location:String
    company : String  
    duration :String 
    status:String
    datePost:String
    user:User
}