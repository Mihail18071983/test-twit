import { AvatarBox, Image, EllipseWrapper } from "./Avatar.styled";

// import ellipse from '../../../../assets/Ellipse.png';

const Avatar = ({ avatar }) => {
  return (
    <AvatarBox>
      <EllipseWrapper>
        <Image src={avatar} alt="image-avatar" />
      </EllipseWrapper>
      {/* <Ellipse src={ellipse} /> */}
    </AvatarBox>
  );
};

export default Avatar;
