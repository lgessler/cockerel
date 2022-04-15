import { mixers, mixer, createMixer, updateMixer, deleteMixer } from './mixers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('mixers', () => {
  scenario('returns all mixers', async (scenario) => {
    const result = await mixers()

    expect(result.length).toEqual(Object.keys(scenario.mixer).length)
  })

  scenario('returns a single mixer', async (scenario) => {
    const result = await mixer({ id: scenario.mixer.one.id })

    expect(result).toEqual(scenario.mixer.one)
  })

  scenario('creates a mixer', async () => {
    const result = await createMixer({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a mixer', async (scenario) => {
    const original = await mixer({ id: scenario.mixer.one.id })
    const result = await updateMixer({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a mixer', async (scenario) => {
    const original = await deleteMixer({ id: scenario.mixer.one.id })
    const result = await mixer({ id: original.id })

    expect(result).toEqual(null)
  })
})
