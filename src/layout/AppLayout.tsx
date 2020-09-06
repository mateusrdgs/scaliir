import './app-layout.styl';

const AppLayout = ({ children }: { children: React.ReactChildren }): React.ReactElement => {
  return <main className='app-layout'>{children}</main>;
};

export default AppLayout;
