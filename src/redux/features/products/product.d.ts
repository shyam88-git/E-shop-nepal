interface GetAllProducts {

    products: Products[],
}

interface Products {

    _id: string | number,
    name: string,
    brand: string,
    price: number,
    qty: 1,
    image: string,
    categry: string;
    description: string,
    usage: string,
    createdAt: string,
    updatedAt: string,
    _V: number,

}