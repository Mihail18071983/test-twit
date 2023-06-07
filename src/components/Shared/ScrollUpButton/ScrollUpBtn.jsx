import { useState, useEffect } from 'react';
import ScrollUpButtonStyled from './ScrollUpBtn.styled';

const ScrollUpBtn = ({ icon: Icon = null, iconSize, round, mediaType }) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleScrollUpBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollUpButtonStyled
      type="button"
      aria-labelledby="scroll up button"
      round={round}
      onClick={handleScrollUpBtn}
      style={{
        transform: scroll < 300 ? 'translateY(+300%)' : 'translateY(0)',
      }}
      mediaType={mediaType}
    >
      {Icon && <Icon size={iconSize} />}
    </ScrollUpButtonStyled>
  );
};

export default ScrollUpBtn;
