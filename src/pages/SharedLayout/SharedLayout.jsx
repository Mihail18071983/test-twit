import { Outlet } from 'react-router-dom';

import { TbArrowBigUpLinesFilled } from 'react-icons/tb';

import AppBar from 'components/AppBar/AppBar';

import ScrollUpBtn from 'components/Shared/ScrollUpButton/ScrollUpBtn';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <ScrollUpBtn icon={TbArrowBigUpLinesFilled} iconSize={30} />
    </>
  );
};

export default SharedLayout;
