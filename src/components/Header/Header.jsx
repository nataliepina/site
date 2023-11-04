import './Header.css';
import { header } from '../../portfolio';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <a href={homepage} className="link home">
            <svg
              width="115"
              height="82"
              viewBox="0 0 115 82"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M59.705 12.182V82H45.386L17.602 41.705h-.443V82H.284V12.182h14.523l27.477 40.227h.58V12.182h16.84ZM60.284 70V.182h28.841c5.227 0 9.739 1.023 13.534 3.068 3.818 2.023 6.761 4.852 8.83 8.489 2.068 3.613 3.102 7.818 3.102 12.613 0 4.819-1.057 9.034-3.171 12.648-2.09 3.59-5.079 6.375-8.965 8.352-3.887 1.978-8.5 2.966-13.841 2.966H70.818V35.023h14.66c2.545 0 4.67-.443 6.374-1.33 1.727-.886 3.034-2.125 3.92-3.716.887-1.613 1.33-3.488 1.33-5.625 0-2.159-.443-4.023-1.33-5.59-.886-1.591-2.193-2.819-3.92-3.682-1.727-.864-3.852-1.296-6.375-1.296H77.16V70H60.284Z"
                fill="currentColor"
              />
            </svg>
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
