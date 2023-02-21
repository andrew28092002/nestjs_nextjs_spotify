import { wrapper } from "@/store/store";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
