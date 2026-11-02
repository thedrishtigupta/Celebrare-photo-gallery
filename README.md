# Photo Gallery

A responsive photo gallery built with React, Vite and Tailwind CSS. The application fetches photos from the Picsum API and allows users to search by author and manage their favourite photos.

## Features

- **Photo Gallery:** Fetches and displays 30 photos from the Picsum API.
- **Responsive Design:** Adapts to desktop (4 columns), tablet (2 columns) and mobile (1 column).
- **Author Search:** Search photos instantly by author name without additional API requests.
- **Favourites:** Add or remove photos from favourites.
- **Persistent Storage:** Favourites are saved in localStorage and restored when the page is refreshed.
- **Loading State:** Displays a loading indicator while photos are being fetched.
- **Error Handling:** Displays an error message if the API request fails.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- Picsum Photos API
- Browser localStorage

## React Concepts Used

| Concept | Implementation |
|---|---|
| `useState` | Managing search input, photos, loading and error states |
| `useEffect` | Fetching photos and synchronizing favourites with localStorage |
| `useCallback` | Memoizing the search handler |
| `useMemo` | Optimizing the filtered photos calculation |
| `useReducer` | Managing favourite photo state |
| Custom Hooks | Encapsulating API fetching logic in `useFetchPhotos` |

## API

Photos are fetched from:

`https://picsum.photos/v2/list?limit=30`

The API provides photo information including the image URL, author and photo ID.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/thedrishtigupta/Celebrare-photo-gallery
   ```

2. Navigate to the project directory:

   ```bash
   cd photo-gallery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

### Production Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```text
photo-gallery/
├── public/
├── src/
│   ├── components/
│   │   ├── Gallery.jsx
│   │   └── PhotoCard.jsx
│   ├── hooks/
│   │   └── useFetchPhotos.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Author

**Drishti Gupta**

- GitHub: [@thedrishtigupta](https://github.com/thedrishtigupta)

Developed as part of the Celebrare Frontend React Internship Assignment.