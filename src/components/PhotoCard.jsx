


function PhotoCard({photo, isFav, onToggleFav}) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
            <img
                src={photo.download_url}
                alt={`Photo by ${photo.author}`}
                className="w-full h-64 object-cover"
            />

            <div className="p-4 flex items-center justify-between">
                <h3 className="font-medium text-gray-800">{photo.author}</h3>
                <button
                    onClick={onToggleFav}
                    aria-label={
                        isFav ? 'Remove from favourites' : 'Add to favourites'
                    }
                    aria-pressed={isFav}
                    className={`text-2xl transition-colors duration-200 ${
                        isFav ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                    }`}
                >
                    {isFav ? '♥' : '♡'}
                </button>
            </div>
        
        </div>
    )
}

export default PhotoCard
