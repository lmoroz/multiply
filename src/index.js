module.exports = function multiply(first, second) {
    const buffer = [];

    first.split('').reverse().forEach((top_digit, top_index) =>
        second.split('').reverse().forEach((bottom_digit, bottom_index) => {
            const [cur_multiply, cur_rank] = [top_digit * bottom_digit, top_index + bottom_index];
            (cur_rank in buffer)
                ? buffer[cur_rank] += cur_multiply
                : buffer[cur_rank] = cur_multiply;
        })
    );
    buffer.forEach((cur_multiply, index) => {
        const [, memory, ones] = cur_multiply.toString().match(/(.*)(\d)$/);
        buffer[index] = ones;
        if (memory) {
            ((index + 1) in buffer)
            ? buffer[index + 1] += Number(memory)
            : buffer.push(Number(memory));
        }
    });
    return buffer.reverse().join('');
};
