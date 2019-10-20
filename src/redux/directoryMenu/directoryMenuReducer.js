
const INITIAL_STATE = {
  sections: [
    {
      title: 'cartoys',
      imageURL : 'https://picsum.photos/id/1072/387/259',
      id: 1,
      linkURL: "shop/cartoys"
    },
    {
      title: 'educational',
      imageURL : 'https://picsum.photos/id/20/367/246',
      id: 2,
      linkURL: "shop/educational"
    },
    {
      title: 'baby toys',
      imageURL : 'https://picsum.photos/id/96/475/316',
      id: 3,
      linkURL: "shop/babytoys"
    },
    {
      title: 'boys',
      imageURL : 'https://picsum.photos/id/157/621/486',
      size: 'large',
      id: 4,
      linkURL: "shop/boys"
    },
    {
      title: 'girls',
      imageURL : 'https://picsum.photos/id/146/518/345',
      size: 'large',
      id: 5,
      linkURL: "shop/girls"
    },
  ]
}

const DirectoryMenuReducer = (state=INITIAL_STATE, action) =>{
  switch (action.type) {
  
    default:
      return state
  }
}

export default DirectoryMenuReducer;