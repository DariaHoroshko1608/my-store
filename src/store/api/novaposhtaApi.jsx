import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Вставте ваш ключ API Нової Пошти
const API_KEY = 'd8309f74fae2504a4de5f476e64cd8d4';  // Ваш API-ключ

export const novaPoshtaApi = createApi({
    reducerPath: 'novaPoshtaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.novaposhta.ua/v2.0/json/' }),
    endpoints: (builder) => ({
        getWarehouses: builder.query({
            query: (cityRef) => ({
                method: 'POST',
                body: JSON.stringify({
                    apiKey: API_KEY,
                    modelName: 'AddressGeneral',
                    calledMethod: 'getWarehouses',
                    methodProperties: {
                        CityRef: cityRef,
                    },
                }),
                headers: { 'Content-Type': 'application/json' },
            }),
        }),
    }),
});

export const { useGetWarehousesQuery } = novaPoshtaApi;
