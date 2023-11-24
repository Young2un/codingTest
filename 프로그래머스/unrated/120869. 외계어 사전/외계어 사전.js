function solution(spell, dic) {
    const setDic = dic.filter(v=>new Set([...v]).size===spell.length)
    const result=setDic.filter(k=>new Set([...k,...spell]).size===spell.length)
    
    return result.length >0  ? 1 : 2
    
}