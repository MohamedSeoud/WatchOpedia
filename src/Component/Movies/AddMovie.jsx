import { Fragment, useState } from "react";
import classes from './AddMovie.module.css';

const AddMovie = (props)=>{

    const[movieItem,setMovieItem] = useState('');


    const onChangeHandler =(event)=>{
        setMovieItem(event.target.value)
        console.log(movieItem)

    }

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        if(movieItem.trim() === ''){
            return;
        }
        props.onAddHandler(movieItem);
        setMovieItem('');
    }
    

    return(
        <Fragment>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <p className={classes.paragraph}>AddMovie</p>
                <div className={classes.input}>
                    <p>Movie :</p>
                    <input onChange={onChangeHandler}/> 
                    <button className="form-control">Add Movie</button>
                </div>
            </form>
        </Fragment>
    )
}
export default AddMovie;