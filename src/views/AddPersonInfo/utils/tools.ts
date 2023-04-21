export function distributeIntegers(x: number, y: number): number[] {
    const quotient = Math.floor(x / y); // 商
    const remainder = x % y; // 余数
    const result = new Array(y).fill(quotient); // 均分的整数数组

    // 将余数分配到数组中
    for (let i = 0; i < remainder; i++) {
        result[i]++;
    }

    return result;
}