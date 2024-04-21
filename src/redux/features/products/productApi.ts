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
        })
    })
})


export const { useGetMenCollectionQuery, useGetWomenCollectionQuery, useGetKidsCollectionQuery } = productApi;