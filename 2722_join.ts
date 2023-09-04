function join(arr1: any[], arr2: any[]): any[] {
    const map = {};
    for (let elem of arr1) {
        map[elem.id] = elem;
    }

    for(let elem of arr2) {
        if(map[elem.id]) {
            map[elem.id] = Object.assign(map[elem.id], elem);
        } else {
            map[elem.id] = elem;
        }
    }


    return Object.values(map);
};