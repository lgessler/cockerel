import { db } from 'src/lib/db'

export const tastings = () => {
  return db.tasting.findMany()
}

export const tasting = ({ id }) => {
  return db.tasting.findUnique({
    where: { id },
  })
}

export const createTasting = ({ input }) => {
  return db.tasting.create({
    data: input,
  })
}

export const updateTasting = ({ id, input }) => {
  return db.tasting.update({
    data: input,
    where: { id },
  })
}

export const deleteTasting = ({ id }) => {
  return db.tasting.delete({
    where: { id },
  })
}

export const Tasting = {
  author: (_obj, { root }) =>
    db.tasting.findUnique({ where: { id: root.id } }).author(),
  recipe: (_obj, { root }) =>
    db.tasting.findUnique({ where: { id: root.id } }).recipe(),
  mixer: (_obj, { root }) =>
    db.tasting.findUnique({ where: { id: root.id } }).mixer(),
}
