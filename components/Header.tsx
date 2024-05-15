import Link from 'next/link';
import styles from '../styles/globals.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {/* Additional navigation links can be added here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;