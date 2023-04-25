export const formatter = (number: number) => {
    const nf = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 20
    });

    return nf.format(number)
}
