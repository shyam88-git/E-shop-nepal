import { rootApi } from "@/redux/root.api.";
export const productApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getMenCollection: builder.query<GetAllProducts, void>({
            query: () => ({
                url: `products/men`,
                method: 'Get',

            }),
            providesTags: ['product']
        }),
        getWomenCollection: builder.query<GetAllProducts, void>({
            query: () => ({

                url: `products/women`,
                method: 'Get'
            }),
            providesTags: ['product']


        }),

        getKidsCollection: builder.query<GetAllProducts, void>({

            query: () => ({

                url: `products/kids`,
                method: 'Get',

            }),
            providesTags: ['product']
        }),

        getSingleProuct: builder.query<GetAllProducts, string | number>({

            query: (product_id) => ({

                url: `products/${product_id}`,
                method: 'Get',
            }),
            providesTags: ['product']


        }),

        getAllProduct: builder.query<GetAllProducts, void>({
            query: () => ({
                url: 'products/all',
                method: 'Get'

            }),
            providesTags: ['product'],

        }),

        uploadProduct: builder.mutation<any, PayloadProduct>({

            query: (data) => ({

                url: 'products/upload',
                method: 'POST',
                body: data
            }),

            invalidatesTags: ['product']
        }),
    })
})


export const { useGetMenCollectionQuery, useGetWomenCollectionQuery,
    useGetKidsCollectionQuery, useLazyGetSingleProuctQuery,
    useUploadProductMutation, useGetAllProductQuery } = productApi;