const users = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
  ]
  
const names = users.map(function(user){
    return user.name
})
console.log(names)



const ages = users.map(function(item){
    return {
    fullName: `${item.name} ${item.age}`
    }
})
console.log(ages)


const tt = users.map(function(item){
    return item.age
})

console.log(tt)
