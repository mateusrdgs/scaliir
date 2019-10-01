import Loader from 'elements/Loader';

import './fallback-loader.styl';

const FallbackLoader = (): React.ReactElement => {
  return (
    <div className="fallback-loader">
      <Loader />
    </div>
  );
};

export default FallbackLoader;
