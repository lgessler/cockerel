import {
  ingredientCategories,
  ingredientCategory,
  createIngredientCategory,
  updateIngredientCategory,
  deleteIngredientCategory,
} from './ingredientCategories'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('ingredientCategories', () => {
  scenario('returns all ingredientCategories', async (scenario) => {
    const result = await ingredientCategories()

    expect(result.length).toEqual(
      Object.keys(scenario.ingredientCategory).length
    )
  })

  scenario('returns a single ingredientCategory', async (scenario) => {
    const result = await ingredientCategory({
      id: scenario.ingredientCategory.one.id,
    })

    expect(result).toEqual(scenario.ingredientCategory.one)
  })

  scenario('creates a ingredientCategory', async () => {
    const result = await createIngredientCategory({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a ingredientCategory', async (scenario) => {
    const original = await ingredientCategory({
      id: scenario.ingredientCategory.one.id,
    })

    const result = await updateIngredientCategory({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a ingredientCategory', async (scenario) => {
    const original = await deleteIngredientCategory({
      id: scenario.ingredientCategory.one.id,
    })

    const result = await ingredientCategory({ id: original.id })

    expect(result).toEqual(null)
  })
})
