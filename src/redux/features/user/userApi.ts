import { rootApi } from "@/redux/root.api.";
import { GetUserInfo } from "./user";
export const userApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserInfo: builder.query<GetUserInfo, void>({
            query: () => ({
                url: `/users/`,
                method: 'GET',
            }),
            providesTags: ['users']
        }),





    })
})

export const { useGetUserInfoQuery } = userApi;