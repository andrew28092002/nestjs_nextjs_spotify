import { store } from "@/store/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: `${process.env.API_URL}/graphql`,
  cache: new InMemoryCache(),
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}
