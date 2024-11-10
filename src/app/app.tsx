import { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import axiosInstance from '@/utils/page';



interface MyAppProps extends AppProps {
  axios: typeof axiosInstance;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} axios={axiosInstance} />
    </>
  );
}

export default MyApp;
