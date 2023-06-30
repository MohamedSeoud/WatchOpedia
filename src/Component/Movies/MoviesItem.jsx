import { Fragment } from "react";
import classes from './MoviesItem.module.css';

const MoviesItem = (props)=>{



    const items = props.movieList.map((item)=>{return(
        <Fragment>
        <div className={classes.form}>
            <p className={classes.para1}>Movie :</p>
            <p className={classes.para2}>{item}</p>
        </div>
        </Fragment>
    )})
    

    return(
        <Fragment>
        <p className={classes.paragraph}>Movies</p>
        {items}

        </Fragment>
    )
}
export default MoviesItem;