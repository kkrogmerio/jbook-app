import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ShareContentRequest,
  ShareContentResponse,
  FetchContentRequest,
  FetchContentResponse,
} from "../../types/content";
const ContentApi = createApi({
  reducerPath: "contentApi",
  tagTypes: ["content"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3010/api",
  }),
  endpoints: (builder) => ({
    shareContent: builder.mutation<ShareContentResponse, ShareContentRequest>({
      invalidatesTags: ["content"],
      query: (body) => ({
        url: "/content",
        method: "POST",
        body,
      }),
    }),
    fetchSharedContent: builder.query<
      FetchContentResponse,
      FetchContentRequest
    >({
      providesTags: ["content"],
      query: ({ shareId }) => ({
        url: `/content/${shareId}`,
        method: "GET",
      }),
    }),
  }),
});
export default ContentApi;
export const { useFetchSharedContentQuery, useShareContentMutation } = ContentApi;
