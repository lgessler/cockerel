import {
  ingredients,
  ingredient,
  createIngredient,
  updateIngredient,
  deleteIngredient,
} from './ingredients'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('ingredients', () => {
  scenario('returns all ingredients', async (scenario) => {
    const result = await ingredients()

    expect(result.length).toEqual(Object.keys(scenario.ingredient).length)
  })

  scenario('returns a single ingredient', async (scenario) => {
    const result = await ingredient({ id: scenario.ingredient.one.id })

    expect(result).toEqual(scenario.ingredient.one)
  })

  scenario('creates a ingredient', async (scenario) => {
    const result = await createIngredient({
      input: {
        authorId: scenario.ingredient.two.authorId,
        name: 'String9928321',
      },
    })

    expect(result.authorId).toEqual(scenario.ingredient.two.authorId)
    expect(result.name).toEqual('String9928321')
  })

  scenario('updates a ingredient', async (scenario) => {
    const original = await ingredient({ id: scenario.ingredient.one.id })
    const result = await updateIngredient({
      id: original.id,
      input: { name: 'String38404662' },
    })

    expect(result.name).toEqual('String38404662')
  })

  scenario('deletes a ingredient', async (scenario) => {
    const original = await deleteIngredient({ id: scenario.ingredient.one.id })
    const result = await ingredient({ id: original.id })

    expect(result).toEqual(null)
  })
})
