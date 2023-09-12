function solution(order) {
   // const ame = order.filter(v=>v.includes('ame')||v.includes('any')).length *4500
   const latte = order.filter( v => v.includes('latte')).length
   return ( order.length - latte ) * 4500 + latte * 5000
}