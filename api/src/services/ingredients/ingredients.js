import { db } from 'src/lib/db'

export const ingredients = () => {
  return db.ingredient.findMany()
}

export const ingredient = ({ id }) => {
  return db.ingredient.findUnique({
    where: { id },
  })
}

export const createIngredient = ({ input }) => {
  return db.ingredient.create({
    data: input,
  })
}

export const updateIngredient = ({ id, input }) => {
  return db.ingredient.update({
    data: input,
    where: { id },
  })
}

export const deleteIngredient = ({ id }) => {
  return db.ingredient.delete({
    where: { id },
  })
}

export const Ingredient = {
  author: (_obj, { root }) =>
    db.ingredient.findUnique({ where: { id: root.id } }).author(),
  categories: (_obj, { root }) =>
    db.ingredient.findUnique({ where: { id: root.id } }).categories(),
  recipes: (_obj, { root }) =>
    db.ingredient.findUnique({ where: { id: root.id } }).recipes(),
}
