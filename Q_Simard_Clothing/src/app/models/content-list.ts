import { IContent } from "./icontent";

export class ContentList {

private _hoodies: IContent[];

constructor(){
    this._hoodies = []
}

get listOfHoodies(): IContent[]{
    return this._hoodies
}

public addContent(hoodiesToAdd: IContent){
    this._hoodies.push(hoodiesToAdd)
}

public arrayLength(){
    this._hoodies.length
}





}
