const format = (value, decimal = 2) => {
    value = (value / 100).toFixed(decimal);

    return `$${value}`;
};

export default format;