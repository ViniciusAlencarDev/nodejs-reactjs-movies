import * as Styles from './styles';
import baseURL from '../../modules/axios';
import { useEffect, useState } from 'react';

import { MovieType } from '../../types/global';

export default function Home() {

    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(0);
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const data = await baseURL.get(`/movies?page=${page}`)
                if (data.data.success) {
                    setTotalPages(data.data.data.totalPages);
                    setMovies(data.data.data.data)
                    if (data.data.data.data.length > 0) {
                        if (page === 0)
                            setPage(1)
                    }
                }
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        })()
    }, [page]);

    function handlerChangePage(option: string) {
        switch (option) {
            case '-':
                if (page > 1) {
                    setPage(page => page - 1);
                    setIsLoading(true);
                }
                break;

            case '+':
                if (page < totalPages) {
                    setPage(page => page + 1);
                    setIsLoading(true);
                }
                break;
            default:
                console.log('Inalid option')
                break;
        }
    }

    return (
        <Styles.Container>
            <Styles.BoxInfo>
                {
                    page > 1 &&
                    <Styles.Button onClick={() => handlerChangePage('-')}>Anterior</Styles.Button>
                }
                <Styles.InfoPage>{page} / {totalPages}</Styles.InfoPage>
                {
                    page < totalPages &&
                    <Styles.Button onClick={() => handlerChangePage('+')}>Próximo</Styles.Button>
                }
            </Styles.BoxInfo>
            <Styles.BoxMovies>
                {
                    isLoading
                        ?
                        <Styles.Loading />
                        :
                        (
                            movies.length > 0 ?
                                movies.map((movie: MovieType, key: number) => (
                                    <Styles.Movie key={key}>
                                        <Styles.MovieTitle>{movie.title}</Styles.MovieTitle>
                                        <Styles.MovieDescription>{movie.description}</Styles.MovieDescription>
                                        <Styles.MovieDirector>Director: {movie.director}</Styles.MovieDirector>
                                        <Styles.MovieProducer>Producer: {movie.producer}</Styles.MovieProducer>
                                    </Styles.Movie>
                                ))
                                :
                                'Nenhum filme encontrado.'
                        )
                }
            </Styles.BoxMovies>


        </Styles.Container>
    );

}
