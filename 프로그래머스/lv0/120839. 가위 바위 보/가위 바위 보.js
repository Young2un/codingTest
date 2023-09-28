function solution(rsp) {
     // const rspWin = {
     //     '2' : '0',
     //     '0' : '5',
     //     '5' : '2'
     // }
     // return [...rsp].reduce((a,c)=> a + rspWin[c],'')
    
  return [...rsp].map(v => v ==='0'? 5 :v === '2'? 0 : 2).join('')
}