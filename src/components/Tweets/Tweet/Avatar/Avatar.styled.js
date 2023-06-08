import styled from "@emotion/styled";
 import ellipse from '../../../../assets/Ellipse.png';

export const AvatarBox = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 178px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  overflow: hidden;
`;

export const EllipseWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  ::after {
    content: "";
    background-image: url(${ellipse});
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;


export const Image = styled.img`
  width: 95%;
  height: 95%;
`;
