import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {


  constructor(private httpClient: HttpClient) { }

   // get Data
   getRecipeList(searchText:any) {
    let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${searchText}&number=5&apiKey=6cf9e630c1b946f99f2924b8125f7852`;
    return this.httpClient.get(apiUrl);
   }
   
   
   getRecipeDetailsList(id: any){
    let API_URL = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=6cf9e630c1b946f99f2924b8125f7852`;
    return this.httpClient.get(API_URL)
   }

   getRecipeDetails(id: any){
   let apiUrl =`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=6cf9e630c1b946f99f2924b8125f7852`
   return this.httpClient.get(apiUrl)
  }
}
