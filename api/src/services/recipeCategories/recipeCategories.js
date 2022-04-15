import { db } from 'src/lib/db'

export const recipeCategories = () => {
  return db.recipeCategory.findMany()
}

export const recipeCategory = ({ id }) => {
  return db.recipeCategory.findUnique({
    where: { id },
  })
}

export const createRecipeCategory = ({ input }) => {
  return db.recipeCategory.create({
    data: input,
  })
}

export const updateRecipeCategory = ({ id, input }) => {
  return db.recipeCategory.update({
    data: input,
    where: { id },
  })
}

export const deleteRecipeCategory = ({ id }) => {
  return db.recipeCategory.delete({
    where: { id },
  })
}

export const RecipeCategory = {
  recipes: (_obj, { root }) =>
    db.recipeCategory.findUnique({ where: { id: root.id } }).recipes(),
}
