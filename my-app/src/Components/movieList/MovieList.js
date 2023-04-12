import Movie from '../movie/Movie'

export default function MovieList(props){
    return(
        <>
         {
            props.trending.map(trend =>{
                return(
                    <Movie trend={trend} commentHandler={props.commentHandler}/>
                )
            })
        }
        </>
    )
}
