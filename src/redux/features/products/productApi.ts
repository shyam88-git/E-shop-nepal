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


        })
    })
})


export const { useGetMenCollectionQuery, useGetWomenCollectionQuery } = productApi;