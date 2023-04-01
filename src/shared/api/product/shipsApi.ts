import { createApi } from "@reduxjs/toolkit/dist/query/react";
import axiosBaseQuery from "../api.service";
import { DocShip } from "../../types/types";

export const shipsApi = createApi({
  reducerPath: "shipApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4",
  }),
  tagTypes: ["Ship"],
  endpoints: (builder) => ({
    getShips: builder.query<DocShip, string | undefined>({
      query: (pageId) => ({
        url: `/ships/${pageId}`,
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
      providesTags: () => ["Ship"],
    }),
  }),
});
