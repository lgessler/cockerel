import {
  tastings,
  tasting,
  createTasting,
  updateTasting,
  deleteTasting,
} from './tastings'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tastings', () => {
  scenario('returns all tastings', async (scenario) => {
    const result = await tastings()

    expect(result.length).toEqual(Object.keys(scenario.tasting).length)
  })

  scenario('returns a single tasting', async (scenario) => {
    const result = await tasting({ id: scenario.tasting.one.id })

    expect(result).toEqual(scenario.tasting.one)
  })

  scenario('creates a tasting', async (scenario) => {
    const result = await createTasting({
      input: {
        authorId: scenario.tasting.two.authorId,
        recipeId: scenario.tasting.two.recipeId,
        mixerId: scenario.tasting.two.mixerId,
        decistars: 389643,
      },
    })

    expect(result.authorId).toEqual(scenario.tasting.two.authorId)
    expect(result.recipeId).toEqual(scenario.tasting.two.recipeId)
    expect(result.mixerId).toEqual(scenario.tasting.two.mixerId)
    expect(result.decistars).toEqual(389643)
  })

  scenario('updates a tasting', async (scenario) => {
    const original = await tasting({ id: scenario.tasting.one.id })
    const result = await updateTasting({
      id: original.id,
      input: { decistars: 1509260 },
    })

    expect(result.decistars).toEqual(1509260)
  })

  scenario('deletes a tasting', async (scenario) => {
    const original = await deleteTasting({ id: scenario.tasting.one.id })
    const result = await tasting({ id: original.id })

    expect(result).toEqual(null)
  })
})
