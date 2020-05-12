const normalize = (amount) => {
    if (amount === null) {
        return amount;
    }

    // Dot by comma
    amount = amount.replace(",", ".");

    // Just numbers and dot
    amount = amount.replace(/[^0-9.]/g, "");

    // Just two decimals
    amount = Number.parseFloat(amount).toFixed(2);

    // Remove dot, so it is like multiplying by 100
    amount = amount.replace(/[^0-9]/g, "");

    // Convert to integer
    amount = Number.parseInt(amount);

    return amount;
};

export default normalize;