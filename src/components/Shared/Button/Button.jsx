import theme from 'theme';
import { Btn, BtnText } from './Button.styled';

const Button = ({ children, active, onClick, icon: Icon, iconSize }) => {
  return (
    <Btn onClick={onClick} active={active}>
      {Icon && <Icon size={iconSize} style={{ marginRight: theme.space[3] }} />}
      <BtnText>{children}</BtnText>
    </Btn>
  );
};

export default Button;
