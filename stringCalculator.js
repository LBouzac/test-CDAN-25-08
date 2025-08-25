export function add(sepNumbers) {
    try {
        if (!sepNumbers || sepNumbers === '0') return 0;

        let separator = ',';

        if (sepNumbers.startsWith('//')) {
            const [customSep, rest] = sepNumbers.split('\\n');
            separator = customSep.slice(2);
            sepNumbers = rest;
        } else {
            sepNumbers = sepNumbers.replace('\\n', ',');
        }

        if (sepNumbers.includes('-')) {
            return `Negatives not allowed: ${sepNumbers
                .split(separator)
                .map(Number)
                .filter(num => num < 0)
                .join(separator)}`;
        }

        return sepNumbers
            .split(separator)
            .map(Number)
            .reduce((sum, num) => sum + (num >= 1000 ? 0 : num), 0);
    } catch (err) {
        return err.message;
    }
}