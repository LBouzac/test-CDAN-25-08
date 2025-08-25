export function add(numbers) {

    if (numbers === '0' || numbers === '') {
        return 0;
    }

    numbers = numbers.replace('\\n', ',')

    numbers = numbers.split(',').map(Number).reduce((a, b) => a + b, 0);
    console.log(numbers);

    return numbers;
}