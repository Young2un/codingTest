function solution(participant, completion) {
   // return participant.filter(v=> !completion.includes(v)).join('')
    
  const racer = participant.reduce((a,c)=>{
        a[c]=(a[c]||0)+1
        return a
    },{})
  
const complete=  completion.reduce((a,c)=>{
        a[c]=(a[c]||0)-1
        return a
    },racer)

const arr = Object.entries(complete)

const filterArr = arr.filter((v)=>v[1])

// const ppp= ['aa','bb']
// console.log( ppp.join(''))

return filterArr.map(v=>v[0]).join('')

}