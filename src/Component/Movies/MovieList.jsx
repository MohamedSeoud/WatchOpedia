import { Fragment, useState } from "react"
import AddMovie from "./AddMovie"
import MoviesItem from "./MoviesItem";

const MovieList =()=>{

    const [movieList,setMovieList] = useState(['SuperNatural!']);

    const ItemHandler= (item)=>{
        setMovieList((prev)=>{
            return[...prev,item];
        })
    }
    return(
        <Fragment>
            <AddMovie onAddHandler={ItemHandler}/>
            <MoviesItem movieList={movieList} />
        </Fragment>
    )
}
export default MovieList;