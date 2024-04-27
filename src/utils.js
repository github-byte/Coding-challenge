export const getPrice = (price) => {
    const priceNumArr = price.split("") || [];
    const newPrice = (priceNumArr || [])?.slice(1, priceNumArr.length)
    const finalPrice = newPrice?.join("")
    console.log("inside price1212",price, priceNumArr, newPrice, finalPrice);
    return Number(finalPrice)
}