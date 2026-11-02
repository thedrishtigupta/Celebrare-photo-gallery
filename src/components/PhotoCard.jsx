




function PhotoCard({photo, isFav, onToggleFav}) {
    return (
        <div className="group bg-white overflow-hidden transition-all duration-300">

            <div className="relative overflow-hidden bg-pale-sage">
                <img
                    src={photo.download_url}
                    alt={`Photo by ${photo.author}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            <div className="px-3 py-4 flex items-center justify-between border-b border-pale-sage/70">
                <h3 className="font-sans text-sm font-medium text-charcoal">
                    {photo.author}
                </h3>

                <button
                    onClick={onToggleFav}
                    aria-label={
                        isFav ? 'Remove from favourites' : 'Add to favourites'
                    }
                    aria-pressed={isFav}
                    className={`text-2xl leading-none transition-all duration-200 hover:scale-110 ${
                        isFav ? 'text-forest' : 'text-sage hover:text-forest'
                    }`}
                >
                    {isFav ? '♥' : '♡'}
                </button>
            </div>

        </div>
    )
}

export default PhotoCard;
