export const standard = defineScenario({
  tasting: {
    one: {
      data: {
        decistars: 4822352,
        author: {
          create: {
            email: 'String8412202',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        recipe: {
          create: {
            name: 'String',
            author: {
              create: {
                email: 'String176227',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },

        mixer: { create: { name: 'String' } },
      },
    },

    two: {
      data: {
        decistars: 3758366,
        author: {
          create: {
            email: 'String932480',
            hashedPassword: 'String',
            salt: 'String',
          },
        },

        recipe: {
          create: {
            name: 'String',
            author: {
              create: {
                email: 'String7959708',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },

        mixer: { create: { name: 'String' } },
      },
    },
  },
})
