import { Link } from 'react-router-dom';
import CtrlBar from './CtrlBar';


function Header() {
  return (
    <header className="fixed bg-lightBlue w-full h-14 flex justify-between items-center px-4 md:px-8 z-50">
      <Link to="./"><img src="https://fakeimg.pl/100x40/" alt="" /></Link>
      <CtrlBar></CtrlBar>
    </header>
  );
}


export default Header;
