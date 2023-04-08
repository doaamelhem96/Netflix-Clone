import Movie from '../movie/Movie'
export default function MovieList(props) {
    return (
        <>


            {
                props.recipes.map(recipe => {
                    return (
                        <Movie recipe={recipe} />
                    )
                })
            }
        </>
    )
}

