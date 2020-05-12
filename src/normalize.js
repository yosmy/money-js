const normalize = (amount) => {
    if (amount === null) {
        return amount;
    }

    amount = amount.replace(",", ".");

    amount = amount.replace(/[^0-9.]/g, "");

    // Round down to 2 decimals
    amount = Math.floor(amount * 100) / 100;

    return amount;
};

export default normalize;