import styled from '@emotion/styled';

import img from '../../../assets/picture2 1.png';
import GoitLogo from './GoIT-logo';

export const TweetBox = styled.li`
list-style: none;
  position: relative;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ImageBox = styled.div`
  height: 214px;
  width: 100%;
  background-image: url('${img}');
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const GoIt = styled(GoitLogo)`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

export const Delimiter = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${p => p.theme.colors.secondary};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const InfoBox = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.22;
  color: ${p => p.theme.colors.secondary};
  margin-top: 62px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
`;
