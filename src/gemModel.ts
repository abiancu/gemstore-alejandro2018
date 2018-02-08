import { ReviewModel} from "./reviewmodel";

export class GemModel{
    id: number;
    name: string;
    price: number;
    description: string;
    fullImagePath: string;
    inventory: number;
    colors:string[]; 
    reviews: ReviewModel[];


    
}