interface GetAllProducts {

    products: Products[],
}

interface Products {

    _id: string | number,
    name: string,
    brand: string,
    price: string,
    qty: string,
    image: string,
    category: string;
    description: string,
    usage: string,
    createdAt: string,
    updatedAt: string,
    _V: number,

}

interface PayloadProduct {

    name: string;
    brand: string;
    qty: string;
    price: string;
    usage: string;
    category: string;
    description: string;
    image: string;

}