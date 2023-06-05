import { AvatarBox, Ellipse, Image } from './Avatar.styled';

import ellipse from '../../../../assets/Ellipse.png';

const Avatar = ({ avatar }) => {
  return (
    <AvatarBox>
      <Ellipse src={ellipse} />
      <Image src={avatar} />
    </AvatarBox>
  );
};

export default Avatar;
