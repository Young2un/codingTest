function solution(routes) {
    const sortRoutes = routes.sort((a,b)=> a[1]-b[1])
    // 첫 번째 차량의 진출 지점에 카메라를 설치
    let coordinate = sortRoutes[0][1]
    let cameraCount = 1
    
    for(let i =1 ; i< sortRoutes.length; i++){
        const [entrance,exit] = sortRoutes[i]
        
        if(coordinate < entrance) {
            cameraCount ++
            coordinate = exit
        }
    }
    
    return cameraCount
}