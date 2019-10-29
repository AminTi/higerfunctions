
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


// function filterIt(ary, x,y){
//     return ary.filter(function(num){
//     return x <= num && num <= y
//     })
// }
// console.log(filterIt(arr,2,18))

 
function  sortera(srt,x,y) {
    return srt.filter(function(item){
        return x <= item && item <= y
    })
    
}
console.log(sortera(arr,10,18))