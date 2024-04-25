import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface ProductState {
    products: {

        name: string;
        brand: string;
        price: number | string;
        qty: number | string;
        image: string;
        category: string;
        description: string;
        usage: string;
    }[];
}

const initialState: ProductState = {
    products: [
        {

            name: "product",
            brand: "men",
            price: 2,
            qty: 2,
            image: "s.jpg",
            category: "men",
            description: "product",
            usage: "prss",
        },
    ],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ProductState["products"][0]>) => {
            const product = {


                ...action.payload,
            };
            state.products.push(product);
        },



    },
});

export const { addProduct } = productSlice.actions;
