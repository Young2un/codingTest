function solution(genres, plays) {
    
    const album = genres.reduce((acc, cur, index) => {
        acc[cur] = acc[cur] 
            ? {...acc[cur] ,song:[...acc[cur].song,{num:index, play:plays[index]}],count:acc[cur].count+=plays[index]}
            : {count:plays[index], song:[{num:index, play:plays[index]}]};
        return acc;
    }, {});
    
    const arr = Object.values(album)
    
    // 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
        const sortCount = arr.sort((a,b)=>b.count - a.count)
    
    // 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
        const sortSong = sortCount.map(v=>v.song.sort((a,b)=>b.play-a.play))

    
        const pick = sortSong.map(v=>{
            if(v.length === 1) {
                return [v[0].num]
            }
            return [v[0].num,v[1].num]
            
        })
        
        
    // 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
    
    return pick.flat()
    
}
