function generateTree(folders) {
  const children = []
  if(folders && folders.length == 0) return [];

  folders.map(folder => {
    let parentId = null;
    if(folder.parentId !== null) {
      parentId = folder.parentId; 
    }
    delete folder.parentId;
    folder.children = [];

    if(parentId !== null){
      children.some( child_file => {
        if(child_file.id === parentId) {
          child_file.children.push(folder);
        }
      }
    )
    return;
  }
    children.push(folder)
  });
  return children;
}

const folders1 = []
console.log(generateTree(folders1));

const folders2 = [
  {
    id: 1,
    title: "SOP004",
    parentId: null
  }
];
console.log(generateTree(folders2));

const folders3 = [
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


console.log(generateTree(folders3));

let folders4 = [
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


console.log(generateTree(folders4));
