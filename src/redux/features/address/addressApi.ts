import { rootApi } from "@/redux/root.api.";
import { AddressPayload, AddressPayloadSuccess } from "../address/address";
export const addressApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        updateUserAddress: builder.mutation<void, AddressPayload>({
            query: (data) => ({
                url: '/users/address',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['address']
        })



    })
})

export const { useUpdateUserAddressMutation } = addressApi;