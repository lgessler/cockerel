import { db } from 'src/lib/db'

export const ingredientCategories = () => {
  return db.ingredientCategory.findMany()
}

export const ingredientCategory = ({ id }) => {
  return db.ingredientCategory.findUnique({
    where: { id },
  })
}

export const createIngredientCategory = ({ input }) => {
  return db.ingredientCategory.create({
    data: input,
  })
}

export const updateIngredientCategory = ({ id, input }) => {
  return db.ingredientCategory.update({
    data: input,
    where: { id },
  })
}

export const deleteIngredientCategory = ({ id }) => {
  return db.ingredientCategory.delete({
    where: { id },
  })
}

export const IngredientCategory = {
  ingredients: (_obj, { root }) =>
    db.ingredientCategory.findUnique({ where: { id: root.id } }).ingredients(),
}
