import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { EntryChildren } from '../../types.ts';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getEntryChildren: builder.query<EntryChildren, string>({
      query: (path) => `/entries/${path}?alt=children`,
    }),
  }),
});

export const { useGetEntryChildrenQuery } = apiSlice;
