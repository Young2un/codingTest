const timeToMinutes = (time) => {
    const [h,m] = time.split(":").map(Number)
    return h * 60 + m
}

function calcFee(time, fees) {
    const [baseTime, baseFee, unitTime, unitFee] = fees
    
    if(time <= baseTime) return baseFee;
    
    return baseFee + Math.ceil((time - baseTime)/unitTime) * unitFee;
}

function solution(fees, records) {
    
    const parkingData = records.reduce((acc, record) => {
        const [time, carNumber, action] = record.split(" ");
        const minutes = timeToMinutes(time);

        if (!acc[carNumber]) acc[carNumber] = { total: 0, inTime: null };

        if (action === "IN") {
            acc[carNumber].inTime = minutes;
        } else if (action === "OUT") {
            acc[carNumber].total += minutes - acc[carNumber].inTime;
            acc[carNumber].inTime = null;
        }

        return acc;
    }, {});
    
    const lastOut = timeToMinutes('23:59')
    
    Object.entries(parkingData).forEach(([carNumber, data]) => {
        if (data.inTime !== null) {
            data.total += lastOut - data.inTime;
        }
    });

    return Object.entries(parkingData)
        .sort() 
        .map(([carNumber, data]) => calcFee(data.total, fees)); 
}