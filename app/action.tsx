"use server";
import { AnimeCard, AnimeProp } from "@/components/AnimeCard";

/**
 * Fetches anime data from the Shikimori API.
 *
 * @param {number} page - The page number of the anime data to fetch.
 * @return {Promise<any>} A promise that resolves to the fetched anime data.
 */
export const fetchAnime = async (page: number): Promise<any> => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);

    const data = await response.json();
    
    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
    ));
};