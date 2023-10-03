function solution(id_pw, db) {
    // console.log(db.map((v,i)=>v[0]).findIndex(v=>v===id_pw[0]))
    const id = db.map((v,i)=>v[0]).findIndex(v=>v===id_pw[0])
    // console.log(db[id])
    
  return id === -1 ? 'fail' :  db[id][1] === id_pw[1]  ? 'login' : 'wrong pw'
    // db.filter
}