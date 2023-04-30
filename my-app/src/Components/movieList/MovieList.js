import Movie from '../movie/Movie';
import './MovieList.css';
export default function MovieList(props){
    return(
        <>
        <h2 id = "header">Net Flex </h2>
        <div id = "container">
            {props.data.map(movie => {
             
                return <Movie data = {movie} addCommentProp = {props.addCommentProp}/>
            })}
        </div>
        </>
    )
}