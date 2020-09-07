import classnames from 'classnames';

interface Props {
  src: string;
  alt: string;
  className?: string;
  lazy?: boolean;
}

import './index.styl';

const Img = ({ src, alt, className, lazy = true, ...props }: Props): React.ReactElement => {
  return (
    <img
      className={classnames('img', className)}
      src={lazy ? undefined : src}
      data-src={lazy ? src : undefined}
      alt={alt}
      {...props}
    />
  );
};

export default Img;
