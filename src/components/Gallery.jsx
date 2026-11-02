import {useState, useCallback, useMemo, useReducer, useEffect} from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";

function favReducer(state, action) {

    switch(action.type) {
        case 'TOGGLE_FAV': {
            const exists = state.some(
                (photo) => photo.id === action.photo.id
            )

            if(exists) {
                return state.filter(
                    (photo) => photo.id !== action.photo.id
                )
            }

            return [...state, action.photo]
        }

        default:
            return state
    }
}

function Gallery() {
    const {photos, loading, error} = useFetchPhotos();

    const [search, setSearch] = useState('');

    const [fav, dispatch] = useReducer(
        favReducer,
        [],
        () => {
            try{
                const savedFav = localStorage.getItem('fav');
                return savedFav ? JSON.parse(savedFav) : []
            } catch {
                return [];
            }
        }
    )

    useEffect(() => {
        localStorage.setItem(
            'fav',
            JSON.stringify(fav)
        )
    }, [fav])

    const handleSearch = useCallback((value) => {
        setSearch(value);
    }, []);

    const filteredPhotos = useMemo(() => {
        return photos.filter((photo) =>
            photo.author.toLowerCase().includes(search.toLowerCase())
        )
    }, [photos, search]);

    if(loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin"></div>
            </div>
        )
    }

    if(error) {
        return (
            <div className="text-center py-20 text-red-600">
                Error: {error}
            </div>
        )
    }

    return (
        <div>

            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search photos by Author..."
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {
                filteredPhotos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredPhotos.map((photo) => (
                            <PhotoCard
                                key={photo.id}
                                photo={photo}
                                isFav={fav.some(
                                    (fav) => fav.id === photo.id
                                )}
                                onToggleFav={() => {
                                    dispatch({
                                        type: 'TOGGLE_FAV',
                                        photo: photo
                                    })
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h2 className="text-xl font-semibold text-gray-700">
                            No photos found
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Try searching with another author name.
                        </p>
                    </div>
                )
            }

        </div>
        
    )
};

export default Gallery;
