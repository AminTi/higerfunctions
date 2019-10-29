const users = [
    { name: "John", surname: "Smith", id: 1 },
    { name: "Pete", surname: "Hunt", id: 2 },
    { name: "Mary", surname: "Key", id: 3 }
  ]
  
//  const usersMapped = users.map(function(user){
//      return {
//          fullName: `${user.name} ${user.surname}`,
//      id: user.id
//     }
//  })
//  console.log(usersMapped)

 const userAdd = users.map(function(item){
   return{
       NameId: `${item.name} ${item.surname} ${item.id}`
   } 
 })
 console.log(userAdd)

 






