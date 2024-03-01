import { Component } from '@angular/core';
import { UserdataService } from './userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  searchList:any;
  recipes:any;
  recipeDetails:any;
  img:any;
  steps :any
constructor(private userDataService:UserdataService){}

 SearchTerm(search:any){

  console.log(search);
  
  this.GetRecipeData(search);
}

// This for getting first api call response --- Getting all Recipe
GetRecipeData(userInput: any){
    this.userDataService.getRecipeList(userInput).subscribe((res)=>{
    this.searchList = res;
    this.searchList= this.searchList.results
    console.log( this.searchList.results
      );  
  })
}

recipeDetailList(index: any){
    // this call is for  recipe list
  console.log(`index` ,index)
  this.userDataService.getRecipeDetailsList(index +1).subscribe((res)=>{
  this.recipes = res;
  this.img = this.recipes.image
  console.log(this.img);
  console.log('recipe list ',res);
  });

  // this call is for details of recipe
  this.userDataService.getRecipeDetails(index +1).subscribe((res)=>{
  this.recipeDetails = res;
    // this.recipeDetails = this.recipeDetails.results
  console.log( this.recipeDetails)
  console.log('recipe list Details ',res);
    
  })
}


}
