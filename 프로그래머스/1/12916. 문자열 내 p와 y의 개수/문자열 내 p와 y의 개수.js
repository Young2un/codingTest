function solution(s){
    const lowerCase = s.toLowerCase()
    const filterArr= [...lowerCase].filter(v=>v==='p'||v==='y')
  const count =  filterArr.reduce((a,c)=>{
        a[c]=(a[c]||0)+1;
        return a
    },{})
  return count['p']===count['y']
}