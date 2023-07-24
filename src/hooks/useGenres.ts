
import useData from "./useData"


export interface Genres{
    id : number,
    name : string,
    image_background : string
}

const useGenres = () => useData<Genres>('/genres');

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
