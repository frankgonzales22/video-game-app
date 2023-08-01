
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";


export interface Genres {
    id: number,
    name: string,
    image_background: string,


}

// const useGenres = () => ({data : genres, isLoading : false, error : null})

const useGenres = () => {

    // const fetchGenres = () => (
    //     axios
    //         .get<Genres[]>('https://api.rawg.io/api/games?genres=4&key=a38bb52c60504630a5e7136f1d49e649')
    //         .then(res => res.data)
    // )

    return useQuery({
        queryKey: ['genres'],
        queryFn: () => apiClient.get<FetchResponse<Genres>>('/genres').then(res => res.data),
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        initialData: { count: genres.length, results: genres }
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

