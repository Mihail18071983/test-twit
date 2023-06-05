import { Outlet } from 'react-router-dom';

import { TbArrowBigUpLinesFilled } from 'react-icons/tb';

import AppBar from 'components/AppBar';
import ScrollUpButton from 'components/Shared/ScrollUpButton';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <ScrollUpButton icon={TbArrowBigUpLinesFilled} iconSize={30} />
    </>
  );
};

export default SharedLayout;
