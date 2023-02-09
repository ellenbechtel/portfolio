// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <Link to="/">
            <a href={homepage} className='link'>
              {title}
            </a>

          </Link>

        ) : (
          <Link to="/">
            {title}
          </Link>

        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
