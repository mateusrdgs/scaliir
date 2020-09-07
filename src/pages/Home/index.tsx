import { useEffect } from 'react';

import AppLayout from 'layout/AppLayout';
import Img from 'components/Img';
import * as logo from 'assets/images/react.png';

import { observeLazyImages } from 'utils/helpers';

import './home.styl';

const Home = (): React.ReactElement => {
  useEffect(() => {
    observeLazyImages();
  }, []);

  return (
    <AppLayout>
      <section className='home'>
        <Img src={logo.default} alt='react logo' className='react-logo' />
      </section>
    </AppLayout>
  );
};

export default Home;
