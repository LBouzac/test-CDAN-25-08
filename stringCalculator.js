export function add(numbers) {

    if (numbers === '0' || numbers === '') {
        return 0;
    }
    numbers = numbers.split(',').map(Number).reduce((a, b) => a + b, 0);

    return numbers;
}