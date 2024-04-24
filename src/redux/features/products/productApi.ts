import { rootApi } from "@/redux/root.api.";
import { GetAllProducts, GetSingleProduct, PayloadProduct, UpdateProduct } from "./product";
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

        getSingleProuct: builder.query<GetSingleProduct, string | number>({

            query: (product_id) => ({

                url: `products/${product_id}`,
                method: 'Get',
            }),
            providesTags: ['product']


        }),
        getSearchedProduct: builder.query<GetAllProducts, string>({
            query: (category_name) => ({

                url: `products/category/${category_name}`,
                method: 'GET',
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


        updateProduct: builder.mutation<any, { id: string, data: UpdateProduct }>({

            query: ({ id, data }) => ({

                url: `products/${id}`,
                method: 'PUT',
                body: data
            }),
            invalidatesTags: ['product']
        }),

        deleteProduct: builder.mutation<any, string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['product'],
        })
    })
})


export const
    {
        useGetMenCollectionQuery,
        useGetWomenCollectionQuery,
        useGetKidsCollectionQuery,
        useLazyGetSingleProuctQuery,
        useGetSearchedProductQuery,
        useUploadProductMutation,
        useGetAllProductQuery,
        useUpdateProductMutation,
        useDeleteProductMutation,

    } = productApi;