import Money from '../src';

test('With comma', () => {
    expect(
        Money.normalize('4,14')
    ).toStrictEqual(414);
});

test('With $', () => {
    expect(
        Money.normalize('$4.14')
    ).toStrictEqual(414);
});

test('With extra decimals', () => {
    expect(
        Money.normalize('4.145')
    ).toStrictEqual(414);
});

test('', () => {
    expect(
        Money.normalize('4.14')
    ).toStrictEqual(414);
});
