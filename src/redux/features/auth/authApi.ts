import { rootApi } from "@/redux/root.api.";
import { initAuthUser, logout } from "./authSlice";

export const authApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body: { email: string; password: string }) => ({
                url: "users/login",
                method: "POST",
                body,
            }),
            async onQueryStarted(_args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    console.log("data", data);
                    dispatch(initAuthUser(data));
                } catch (err) {
                    dispatch(logout());



                }
            },
        }),
        signup: builder.mutation<SignupPayloadSuccess, SignupPayload>({

            query: (data) => ({

                url: `users/register`,
                method: 'POST',
                body: data,
            })
        }),



    }),
});

export const { useLoginMutation, useSignupMutation } = authApi;