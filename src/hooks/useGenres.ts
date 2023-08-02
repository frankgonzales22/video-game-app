
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";


export interface Genres {
    id: number,
    name: string,
    image_background: string,


}

const apiClient = new APIClient<Genres>('/genres')
const useGenres = () => {

    return useQuery({
        queryKey: ['genres'],
        queryFn:  apiClient.getAll,
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        initialData: genres
    })


}



export default useGenres;




// {
//     const [genres, setGenres] = useState<Genres[]>([])
//     const [error, setError] = useState('')
//     const [isLoading, setIsLoading] = useState(false)

//     console.log(isLoading)
//     useEffect(() => {

//         const controller = new AbortController();
//         setIsLoading(true)

//         apiClient.get<FetchGenresRes>('/genres', { signal: controller.signal })
//             .then(res => {
//                 setGenres(res.data.results)
//                 setIsLoading(false)
//             })
//             .catch(err => {
//                 if (err instanceof CanceledError) return;
//                 setError(err.message)
//                 setIsLoading(false)
//             })

//         return () => controller.abort();
//     }, [])

//     return { genres, error, isLoading }
// }



//origs


// import genres from "../data/genres";


// export interface Genres{
//     id : number,
//     name : string,
//     image_background : string
// }

// const useGenres = () => ({data : genres, isLoading : false, error : null})

// export default useGenres;

