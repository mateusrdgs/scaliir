import Loader from 'components/Loader';

import './fallback-loader.styl';

const FallbackLoader = () => {
  return (
    <div className='fallback-loader'>
      <Loader />
    </div>
  );
};

export default FallbackLoader;
