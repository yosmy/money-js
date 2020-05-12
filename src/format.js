const format = (value) => {
    return `$${(value / 100).toFixed(2)}`;
};

export default format;