// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import TastingsLayout from 'src/layouts/TastingsLayout'
import MixersLayout from 'src/layouts/MixersLayout'
import RecipesLayout from 'src/layouts/RecipesLayout'
import RecipeCategoriesLayout from 'src/layouts/RecipeCategoriesLayout'
import IngredientsLayout from 'src/layouts/IngredientsLayout'
import IngredientCategoriesLayout from 'src/layouts/IngredientCategoriesLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={TastingsLayout}>
        <Route path="/tastings/new" page={TastingNewTastingPage} name="newTasting" />
        <Route path="/tastings/{id:Int}/edit" page={TastingEditTastingPage} name="editTasting" />
        <Route path="/tastings/{id:Int}" page={TastingTastingPage} name="tasting" />
        <Route path="/tastings" page={TastingTastingsPage} name="tastings" />
      </Set>
      <Set wrap={MixersLayout}>
        <Route path="/mixers/new" page={MixerNewMixerPage} name="newMixer" />
        <Route path="/mixers/{id:Int}/edit" page={MixerEditMixerPage} name="editMixer" />
        <Route path="/mixers/{id:Int}" page={MixerMixerPage} name="mixer" />
        <Route path="/mixers" page={MixerMixersPage} name="mixers" />
      </Set>
      <Set wrap={RecipesLayout}>
        <Route path="/recipes/new" page={RecipeNewRecipePage} name="newRecipe" />
        <Route path="/recipes/{id:Int}/edit" page={RecipeEditRecipePage} name="editRecipe" />
        <Route path="/recipes/{id:Int}" page={RecipeRecipePage} name="recipe" />
        <Route path="/recipes" page={RecipeRecipesPage} name="recipes" />
      </Set>
      <Set wrap={RecipeCategoriesLayout}>
        <Route path="/recipe-categories/new" page={RecipeCategoryNewRecipeCategoryPage} name="newRecipeCategory" />
        <Route path="/recipe-categories/{id:Int}/edit" page={RecipeCategoryEditRecipeCategoryPage} name="editRecipeCategory" />
        <Route path="/recipe-categories/{id:Int}" page={RecipeCategoryRecipeCategoryPage} name="recipeCategory" />
        <Route path="/recipe-categories" page={RecipeCategoryRecipeCategoriesPage} name="recipeCategories" />
      </Set>
      <Set wrap={IngredientsLayout}>
        <Route path="/ingredients/new" page={IngredientNewIngredientPage} name="newIngredient" />
        <Route path="/ingredients/{id:Int}/edit" page={IngredientEditIngredientPage} name="editIngredient" />
        <Route path="/ingredients/{id:Int}" page={IngredientIngredientPage} name="ingredient" />
        <Route path="/ingredients" page={IngredientIngredientsPage} name="ingredients" />
      </Set>
      <Set wrap={IngredientCategoriesLayout}>
        <Route path="/ingredient-categories/new" page={IngredientCategoryNewIngredientCategoryPage} name="newIngredientCategory" />
        <Route path="/ingredient-categories/{id:Int}/edit" page={IngredientCategoryEditIngredientCategoryPage} name="editIngredientCategory" />
        <Route path="/ingredient-categories/{id:Int}" page={IngredientCategoryIngredientCategoryPage} name="ingredientCategory" />
        <Route path="/ingredient-categories" page={IngredientCategoryIngredientCategoriesPage} name="ingredientCategories" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
