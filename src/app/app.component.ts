import { Component } from '@angular/core';
import {Recipe} from '../shared/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angular-checkbox-list-demo';
  //
  // selectedItemsList = [];
  // checkedIDs = [];
  //
  // checkboxesDataList = [
  //   {
  //     id: 'C001',
  //     label: 'Photography',
  //     isChecked: false
  //   },
  //   {
  //     id: 'C002',
  //     label: 'Writing',
  //     isChecked: false
  //   },
  //   {
  //     id: 'C003',
  //     label: 'Painting',
  //     isChecked: false
  //   },
  //   {
  //     id: 'C004',
  //     label: 'Knitting',
  //     isChecked: false
  //   },
  //   {
  //     id: 'C004',
  //     label: 'Dancing',
  //     isChecked: false
  //   },
  //   {
  //     id: 'C005',
  //     label: 'Gardening',
  //     isChecked: false
  //   },
  //   {
  //     id: 'C006',
  //     label: 'Drawing',
  //     isChecked: false
  //   },
  //   {
  //     id: 'C007',
  //     label: 'Gyming',
  //     isChecked: false
  //   },
  //   {
  //     id: 'C008',
  //     label: 'Cooking',
  //     isChecked: false
  //   },
  //   {
  //     id: 'C009',
  //     label: 'Scrapbooking',
  //     isChecked: false
  //   },
  //   {
  //     id: 'C010',
  //     label: 'Origami',
  //     isChecked: false
  //   }
  // ]
  //
  // ngOnInit(): void {
  //   this.fetchSelectedItems();
  //   this.fetchCheckedIDs();
  // }
  //
  // // changeSelection() {
  // //   //   this.fetchSelectedItems();
  // //   // }
  //
  // fetchSelectedItems() {
  //   this.selectedItemsList = this.checkboxesDataList.filter(value => {
  //     return value.isChecked;
  //   });
  // }
  //
  // fetchCheckedIDs() {
  //   this.checkedIDs = []
  //   this.checkboxesDataList.forEach(value => {
  //     if (value.isChecked) {
  //       this.checkedIDs.push(value.id);
  //     }
  //   });
  // }

    recipeList: Recipe[] = [new Recipe('Eggs', false),
                       new Recipe('Beef', false),
                       new Recipe('Chicken', false),
                       new Recipe('Rice', false),
                       new Recipe('Toast', false)];
    // recipeList = [
    //   {
    //     name: 'Eggs',
    //     isChecked: false
    //   },
    //   {
    //     name: 'Beef',
    //     isChecked: false
    //   },
    //   {
    //     name: 'Chicken',
    //     isChecked: false
    //   },
    //   {
    //     name: 'Rice',
    //     isChecked: false
    //   },
    //   {
    //     name: 'Toast',
    //     isChecked: false
    //   }
    // ];
    selectedRecipeList = [];
    isDish = false;
    notDish = false;
    dish = '';

    fetchSelectedRecipes() {
      this.selectedRecipeList = this.recipeList.filter(value => {
        return value.isChecked;
      });
    }

    makeDish() {
      if (this.selectedRecipeList.length !== 2) {
        this.isDish = false;
        this.notDish = true;
        return;
      }

      if (this.selectedRecipeList.some(recipe => recipe.name === 'Eggs')
        && this.selectedRecipeList.some(recipe => recipe.name === 'Rice')) {
        this.isDish = true;
        this.notDish = false;
        this.dish = 'egg rice';
      } else if (this.selectedRecipeList.some(recipe => recipe.name === 'Beef')
        && this.selectedRecipeList.some(recipe => recipe.name === 'Rice')) {
        this.isDish = true;
        this.notDish = false;
        this.dish = 'beef rice';
      } else if (this.selectedRecipeList.some(recipe => recipe.name === 'Chicken')
        && this.selectedRecipeList.some(recipe => recipe.name === 'Rice')) {
        this.isDish = true;
        this.notDish = false;
        this.dish = 'chicken rice';
      } else {
        this.isDish = false;
        this.notDish = true;
        this.dish = '';
      }
    }

    // onUpdateRecipe(element: HTMLInputElement) {
    //   this.isDish = element.value === 'Eggs' ? true : false;
    // }

    // logDish() {
    //   this.makeDish();
    //   if (this.isDish) {
    //     this.log += 'You cooked ' + this.dish;
    //   }
    // }

  // meats = ['Chicken', 'Beef', 'Pork'];
  // veggies = ['Broccoli', 'Mushroom', 'Green Pepper'];
  // meat_choice: string;
  // veggie_choice: string;
  // meat_status = false;
  // veggie_status = false;
  // success = false;
  // fail = false;
  // dish_name: string;
  //
  // pickMeat(type: string) {
  //   this.meat_status = true;
  //   this.meat_choice = type;
  // }
  // pickVeggie(type: string) {
  //   this.veggie_status = true;
  //   this.veggie_choice = type;
  // }
  //
  // restart() {
  //   this.meat_choice = '';
  //   this.veggie_choice = '';
  //   this.meat_status = false;
  //   this.veggie_status = false;
  //   this.success = false;
  //   this.fail = false;
  // }
  // checkOrder() {
  //   if (this.meat_choice === 'Chicken' && this.veggie_choice === 'Mushroom') {
  //     this.success = true;
  //     this.dish_name = 'Mushroom chicken';
  //   } else if (this.meat_choice === 'Beef' && this.veggie_choice === 'Broccoli') {
  //     this.success = true;
  //     this.dish_name = 'Broccoli beef';
  //   } else if (this.meat_choice === 'Pork' && this.veggie_choice === 'Green Pepper') {
  //     this.success = true;
  //     this.dish_name = 'Spicy pork';
  //   } else {
  //     this.fail = true;
  //   }

  // }
}
