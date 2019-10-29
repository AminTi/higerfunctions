const hayStack = [
    {
      id: 0,
      name: 'Straw'
    },
    {
      id: 1,
      name: 'Grass'
    },
    {
      id: 2,
      name: 'Needle'
    },
    {
      id: 3,
      name: 'Stick'
    }
  ]

  function findByName(str, arr){
  return arr.find(function(item){
    return item.name === str
  })
}
console.log(findByName("Straw", hayStack))


function trouve(str, tt){
  return tt.find(function(item){
    return item.name === str
  })
}
console.log(trouve("Needle",hayStack))