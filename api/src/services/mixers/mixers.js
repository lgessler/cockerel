import { db } from 'src/lib/db'

export const mixers = () => {
  return db.mixer.findMany()
}

export const mixer = ({ id }) => {
  return db.mixer.findUnique({
    where: { id },
  })
}

export const createMixer = ({ input }) => {
  return db.mixer.create({
    data: input,
  })
}

export const updateMixer = ({ id, input }) => {
  return db.mixer.update({
    data: input,
    where: { id },
  })
}

export const deleteMixer = ({ id }) => {
  return db.mixer.delete({
    where: { id },
  })
}

export const Mixer = {
  Tasting: (_obj, { root }) =>
    db.mixer.findUnique({ where: { id: root.id } }).Tasting(),
}
