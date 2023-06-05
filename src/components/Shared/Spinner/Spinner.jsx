import { GridLoader } from 'react-spinners';

import SpinnerBox from './Spinner.styled';
import theme from 'theme';

const Spinner = () => {
  return (
    <SpinnerBox>
      <GridLoader color={theme.colors.primary} />
    </SpinnerBox>
  );
};

export default Spinner;
