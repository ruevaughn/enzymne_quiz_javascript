QUnit.test('generates an empty array when there are no folders', function(assert) {
  let folders = [];
  assert.deepEqual(generateTree(folders), []);
});

QUnit.test('generates an option when there is a root folder', function(assert) {
  let folders = [
    {
      id: 1,
      title: "SOP004",
      parentId: null
    }
  ];
  assert.deepEqual(generateTree(folders), [{id: 1, title: "SOP004", children: []}]);
});

QUnit.test('generates nested options when there are nested folders', function(assert) {
  let folders = [
    {
      id: 1,
      title: "SOP004",
      parentId: null
    },
    {
      id: 2,
      title: "SOP004-F3",
      parentId: 1
    },
    {
      id: 3,
      title: "SOP032",
      parentId: null
    },
    {
      id: 4,
      title: "SOP032-F1",
      parentId: 3
    },
    {
      id: 5,
      title: "SOP004-F4",
      parentId: 1
    },
    {
      id: 6,
      title: "SOP004-F5",
      parentId: 1
    },

  ];


  assert.deepEqual(generateTree(folders), [
    {
      title: "SOP004",
      id: 1,
      children: [
        {
          title: "SOP004-F3",
          id: 2,
          children: []
        },
        {
          title: "SOP004-F4",
          id: 5,
          children: []
        },
        {
          title: "SOP004-F5",
          id: 6,
          children: []
        }
      ]
    },
    {
      title: "SOP032",
      id: 3,
      children: [
        {
          title: "SOP032-F1",
          id: 4,
          children: []
        }
      ]
    },

  ]);
});



QUnit.test('generates nested options for multiple levels of nesting', function(assert) {
  let folders = [
    {
      id: 1,
      title: "A",
      parentId: null
    },
    {
      id: 2,
      title: "B",
      parentId: 1
    },
    {
      id: 3,
      title: "C",
      parentId: 2
    },
    {
      id: 4,
      title: "D",
      parentId: 3
    },
    {
      id: 5,
      title: "E",
      parentId: 4
    },
    {
      id: 6,
      title: "F",
      parentId: 5
    }

  ];


  assert.deepEqual(generateTree(folders), [
    {
      title: "A",
      id: 1,
      children: [
        {
          title: "B",
          id: 2,
          children: [
            {
              title: "C",
              id: 3,
              children: [
                {
                  title: "D",
                  id: 4,
                  children: [
                    {
                      title: "E",
                      id: 5,
                      children: [
                        {
                          title: "F",
                          id: 6,
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

  ]);
});
