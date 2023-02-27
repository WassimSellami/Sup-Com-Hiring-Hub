import { Offer } from "./offer"

export interface User {
    id:number
    first_name:String
    last_name:String
    email:String
    password:String 
    birthDate : String
    imagePath:String
    occupation:String
    offers:Offer[]
}    