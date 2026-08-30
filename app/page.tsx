import PokemonList from "@/components/pokemon-list";
import { getPokemonPage } from "@/lib/service/fetchPokemonPage";
import styles from './page.module.css'
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default async function Home() {
  const pokemon = await getPokemonPage();

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <div className={styles.header}>
          <Header />
        </div>
        <PokemonList initialPokemons={pokemon} />
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}