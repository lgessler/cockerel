export const schema = gql`
  type Mixer {
    id: Int!
    name: String!
    url: String
    Tasting: [Tasting]!
  }

  type Query {
    mixers: [Mixer!]! @requireAuth
    mixer(id: Int!): Mixer @requireAuth
  }

  input CreateMixerInput {
    name: String!
    url: String
  }

  input UpdateMixerInput {
    name: String
    url: String
  }

  type Mutation {
    createMixer(input: CreateMixerInput!): Mixer! @requireAuth
    updateMixer(id: Int!, input: UpdateMixerInput!): Mixer! @requireAuth
    deleteMixer(id: Int!): Mixer! @requireAuth
  }
`
