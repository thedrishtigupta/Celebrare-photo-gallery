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
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="w-12 h-12 border-2 border-pale-sage border-t-forest rounded-full animate-spin"></div>
            </div>
        )
    }

    if(error) {
        return (
            <div className="text-center py-20 font-sans text-forest">
                Error: {error}
            </div>
        )
    }

    return (
        <div>

            <div className="max-w-xl mx-auto mb-8">
                <input
                    type="text"
                    placeholder="Search photos by Author..."
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full px-5 py-3.5 bg-white border border-pale-sage rounded-full font-sans text-sm text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-pale-sage transition-all duration-200"
                />
            </div>

            {
                filteredPhotos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
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
                        <h2 className="font-heading text-3xl font-medium text-forest">
                            No photos found
                        </h2>
                        <p className="font-sans text-sm text-charcoal/60 mt-2">
                            Try searching with another author name.
                        </p>
                    </div>
                )
            }

        </div>
        
    )
};

export default Gallery;
