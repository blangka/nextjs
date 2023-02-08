import 'styles/global.scss';
import { AppProps } from 'next/app';

const app = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  return <AnyComponent {...pageProps} />;
};

export default app;
