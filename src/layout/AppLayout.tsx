import './app-layout.styl';

interface Props {
  children: React.ReactNode;
}

const AppLayout = (props: Props): React.ReactElement<Props> => {
  return <main className='app-layout' {...props} />;
};

export default AppLayout;
