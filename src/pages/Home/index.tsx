import logo from '../../assets/images/react.png';

import './home.styl';

const Home = (): React.ReactElement => {
  return (
    <div className='home'>
      <img className='react-logo' src={logo} alt='react logo' />
    </div>
  );
};

export default Home;
