import { Component } from '@angular/core';
import { IContent } from '../icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {

listOfClothes: IContent[];


constructor(){
  this.listOfClothes = [];
  this.listOfClothes.push({
    id: 1,
    name: 'shirt',
    description: 'type of clothing that you can wear in the summer and in the house during winter.',
    author: 'Quinn',
    imgSrc: '101.png',
    type: 'short sleeves',
    tags: ["short sleeves", "#0101"]
  },{
    id: 2,
    name: 'long shirt',
    description: 'you can wear long shirts during the winter and in the summer outside the house',
    author: 'Quinn',
    imgSrc: '105.png',
    type: 'Long sleeves',
    tags: ["Long sleeves", "#0105"]
  },{
    id: 3,
    name: 'sweatshirt',
    description: 'you are able to wear sweatshirts whenever, they are comfy and stylish',
    author: 'Quinn',
    imgSrc: '107.png',
    type: 'hoodies',
    tags: ["hoodies", "#0107"]
  },{
    id: 4,
    name: 'crew neck',
    description: 'crew neck is a type of sweatshirt that gives a little more proper look, and makes you look like you have old money',
    author: 'Quinn',
    imgSrc: '103.png',
    type: 'hoodies',
    tags: ["hoodies", "#0103"]
  })
}







}
