import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/client";
import { EdgeStoreProvider } from '../lib/edgestore';



function App({ Component, pageProps }: AppProps) {
    return (
        <EdgeStoreProvider>
            <ApolloProvider client={client}>
             <Component {...pageProps} />
            </ApolloProvider>
        </EdgeStoreProvider>
    );
}

// Disabling SSR
export default dynamic(() => Promise.resolve(App), { ssr: false });
