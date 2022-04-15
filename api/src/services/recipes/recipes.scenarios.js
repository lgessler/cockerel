export const standard = defineScenario({
  recipe: {
    one: {
      data: {
        name: 'String',
        author: {
          create: {
            email: 'String9031587',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },

    two: {
      data: {
        name: 'String',
        author: {
          create: {
            email: 'String9342294',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
