import { Btn, BtnText } from './Button.styled';

const Button = ({ children, active, onClick }) => {
  return (
    <Btn onClick={onClick} active={active}>
      <BtnText>{children}</BtnText>
    </Btn>
  );
};

export default Button;
