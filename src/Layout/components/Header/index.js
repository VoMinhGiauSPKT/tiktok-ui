import classNames from 'classnames/bind'
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../../../assets/images';



const cx = classNames.bind(styles)

function Header(){
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={image.logo} alt='tiktok'/>
            </div>
            <div className={cx('search')}>
                <input placeholder='tìm kiếm...' spellCheck={false}/>
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faGithub}/>
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faUser}/>
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faGithub}/>
                </button>
            </div>
            <div className={cx('actions')}>
                
            </div>
        </div>
    </header>
}

export default Header