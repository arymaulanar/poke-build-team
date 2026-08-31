"use client";

import { Pokemon } from "@/lib/models/Pokemon";
import { getPokemonPage } from "@/lib/service/fetchPokemonPage";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import Loading from "../loading";
import styles from './pokemon-list.module.css'
import { PokemonItem } from "../pokemon-item";

type Props = {
    initialPokemons: Pokemon[];
};

export default function PokemonList({
    initialPokemons: initialPokemons,
}: Props) {
    const [pokemons, setPokemons] = useState(initialPokemons);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const loadingRef = useRef(false);
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const offsetRef = useRef(initialPokemons.length);

    useEffect(() => {
        if (isLoading) {
            loadMoreRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [isLoading]);

    const fetchNextPage = async () => {
        if (loadingRef.current) {
            return;
        }

        loadingRef.current = true;
        setIsLoading(true);
        setError(null);

        try {
            const nextPokemon = await getPokemonPage(
                offsetRef.current
            );

            setPokemons((current) => [
                ...current,
                ...nextPokemon,
            ]);

            offsetRef.current += nextPokemon.length;
        } catch {
            setError("Unable to load more");
        } finally {
            loadingRef.current = false;
            setIsLoading(false);
        }
    };

    const loadMore = useCallback(() => {
        if (error) return;
        fetchNextPage();
    }, [error]);

    useInfiniteScroll({
        targetRef: loadMoreRef,
        onLoadMore: loadMore,
        isEnabled: !error && !isLoading,
    });

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {pokemons.map((item) => (
                    <PokemonItem
                        key={item.id}
                        pokemon={item}
                    />
                ))}
            </div>

            <div className={styles.status}>
                {isLoading && (
                    <div className={styles.statusLoading}>
                        <Loading />
                        <span className={styles.loadingText}>Loading more Pokemon...</span>
                    </div>
                )}

                {error && (
                    <div className={styles.statusError}>
                        <p>{error}</p>

                        <button className={styles.button} onClick={fetchNextPage}>
                            Try again
                        </button>
                    </div>
                )}
            </div>

            <div ref={loadMoreRef} />
        </div>
    );
}