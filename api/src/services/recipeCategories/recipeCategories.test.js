import {
  recipeCategories,
  recipeCategory,
  createRecipeCategory,
  updateRecipeCategory,
  deleteRecipeCategory,
} from './recipeCategories'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('recipeCategories', () => {
  scenario('returns all recipeCategories', async (scenario) => {
    const result = await recipeCategories()

    expect(result.length).toEqual(Object.keys(scenario.recipeCategory).length)
  })

  scenario('returns a single recipeCategory', async (scenario) => {
    const result = await recipeCategory({
      id: scenario.recipeCategory.one.id,
    })

    expect(result).toEqual(scenario.recipeCategory.one)
  })

  scenario('creates a recipeCategory', async () => {
    const result = await createRecipeCategory({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a recipeCategory', async (scenario) => {
    const original = await recipeCategory({
      id: scenario.recipeCategory.one.id,
    })

    const result = await updateRecipeCategory({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a recipeCategory', async (scenario) => {
    const original = await deleteRecipeCategory({
      id: scenario.recipeCategory.one.id,
    })

    const result = await recipeCategory({ id: original.id })

    expect(result).toEqual(null)
  })
})
