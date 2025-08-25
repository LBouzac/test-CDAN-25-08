export function add(sepNumbers) {
    let separator = ',';
    let numbers;
    let str;

    if (sepNumbers.startsWith('//')) {
        const newlineIndex = sepNumbers.indexOf('\\n');
        separator = sepNumbers.substring(2, newlineIndex);
        sepNumbers = sepNumbers.substring(newlineIndex + 1);
    } else if (sepNumbers.includes('\\n')) {
        sepNumbers = sepNumbers.replace('\\n', ',');
    }

    if (sepNumbers === '' || sepNumbers === '0') {
        return 0;
    }

    sepNumbers = sepNumbers.replace('n', "");
    numbers = sepNumbers.split(separator).map(Number).filter(n => !isNaN(n)).reduce((a, b) => a + b, 0);
    console.log("sepNumbers " + sepNumbers)
    console.log("separator " + separator)
    console.log("numbers " + numbers)

    return numbers;
}