function showProductsDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e seu pre\u00E7o \u00E9 ").concat(product.price));
    if (product.isAvaliable) {
        console.log("O produto está disponível");
    }
}
var shirt = {
    name: "Camisa",
    price: 49.99,
    isAvaliable: true
};
showProductsDetails(shirt);
