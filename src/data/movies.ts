export interface Movie {
  title: string;
  year: number;
  image: string;
}

export const movies: Movie[] = [
  {
    title: "Inception",
    year: 2010,
    image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
  },
  {
    title: "Interstellar",
    year: 2014,
    image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    image: "https://m.media-amazon.com/images/I/91KkWf50SoL.jpg",
  },
]; 