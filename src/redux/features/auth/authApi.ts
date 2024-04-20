import { rootApi } from "@/redux/root.api.";
import { initAuthUser, logout } from "./authSlice";

export const authApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body: { email: string; password: string }) => ({
                url: "/login/",
                method: "POST",
                body,
            }),
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(initAuthUser(data));
                } catch (err) {
                    // Handle error
                }
            },
        }),
        signup: builder.mutation<SignupPayloadSuccess, SignupPayload>({

            query: (data) => ({

                url: `/register`,
                method: 'POST',
                body: data,
            })
        })
    }),
});

export const { useLoginMutation, useSignupMutation } = authApi;