const shuffle = (arr) => {
    let data = [...arr];
    for(let i=data.length-1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [data[i], data[j]] = [data[j], data[i]]
    }
    return data;
}

export {shuffle};