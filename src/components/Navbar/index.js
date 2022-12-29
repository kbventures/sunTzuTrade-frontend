import { Link } from 'react-router-dom';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

import styles from './navbar.module.scss';

const Navbar = () => {
        const { logout } = useLogout();
        const { user } = useAuthContext();

        const handleClick = () => {
                logout();
        };
        return (
                <header>
                        <div className={styles.container}>
                                <Link to="/">
                                        <h1>Sun Tzu Trade</h1>
                                </Link>
                                <nav>
                                        {user && (
                                                <div>
                                                        <span>{user.email}</span>
                                                        <button type="button" onClick={handleClick}>
                                                                Log out
                                                        </button>
                                                </div>
                                        )}
                                        {!user && (
                                                <div>
                                                        <Link to="/login">Login</Link>
                                                        <Link to="/signup">Signup</Link>
                                                </div>
                                        )}
                                </nav>
                        </div>
                </header>
        );
};

export default Navbar;
