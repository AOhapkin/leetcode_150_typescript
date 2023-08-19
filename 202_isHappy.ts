function isHappy(n: number): boolean {
    let sum:any = n;
    const map = new Map();

    while (sum !== 1) {
        if (map.has(sum)) {
            return false;
        }
        map.set(sum, 0);
        sum = sum.toString().split('').map(x=>Math.pow(x*1, 2)).reduce((a,b)=>a+b,0);
    }
    return true;
};