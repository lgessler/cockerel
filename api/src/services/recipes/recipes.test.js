import {
  recipes,
  recipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from './recipes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('recipes', () => {
  scenario('returns all recipes', async (scenario) => {
    const result = await recipes()

    expect(result.length).toEqual(Object.keys(scenario.recipe).length)
  })

  scenario('returns a single recipe', async (scenario) => {
    const result = await recipe({ id: scenario.recipe.one.id })

    expect(result).toEqual(scenario.recipe.one)
  })

  scenario('creates a recipe', async (scenario) => {
    const result = await createRecipe({
      input: { authorId: scenario.recipe.two.authorId, name: 'String' },
    })

    expect(result.authorId).toEqual(scenario.recipe.two.authorId)
    expect(result.name).toEqual('String')
  })

  scenario('updates a recipe', async (scenario) => {
    const original = await recipe({ id: scenario.recipe.one.id })
    const result = await updateRecipe({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a recipe', async (scenario) => {
    const original = await deleteRecipe({ id: scenario.recipe.one.id })
    const result = await recipe({ id: original.id })

    expect(result).toEqual(null)
  })
})
