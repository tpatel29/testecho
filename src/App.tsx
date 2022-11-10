import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Router from './Router';



const queryClient: QueryClient = new QueryClient()


export default function App(): JSX.Element {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>

            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}
