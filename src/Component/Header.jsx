import image from '../images/logo192.png';
import classes from './Header.module.css'; 

const Header = ()=>{



    return(
        <div className={classes.header}>
            <img src={image} alt='' />
            <p>WatchOpedia</p>
        </div>
    )


}
export default Header;