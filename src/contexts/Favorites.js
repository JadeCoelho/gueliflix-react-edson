import { createContext, useState, useContext } from "react";
import movies from "../json/db.json"

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// hook personalizado:

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    // Encontrar o objeto completo baseado na URL
    const full = movies.find((movie) => movie.url === newFavorite.url);

    // Se o objeto não for encontrado, não faça nada
    if (!full) {
      console.warn("Objeto não encontrado para a URL:", newFavorite.url);
      return;
    }

    // Verificar se o item já está nos favoritos
    const isRep = favorite.some((item) => item.url === newFavorite.url);

        // Atualizar a lista de favoritos
        let newList = [...favorite];

        if (!isRep) {
          // Adicionar o novo objeto se ele não estiver na lista
          newList.push(full);
        } else {
          // Remover o objeto se ele já estiver na lista
          newList = favorite.filter((fav) => fav.url !== newFavorite.url);
        }
    

    // criando lógica do item repetido, que verificar se na lista de favs tem algum item que já seja esse que chegou
    
    // const repFav = favorite.some((item) => item.url === newFavorite.url);

    // preservando a listagem de favs anterior:
    // let newList = [...favorite];

    // condição p quando o que chegou é um fav inédito
    // if (!repFav) {
    //   newList.push(newFavorite);
    //   return setFavorite(newList);
    // }

    // sendo repetido...
    // assegurando que a lista de favs só vai possuir itens que não sejam idênticos ao que chegou; se for, será retirado
    // newList = favorite.filter((fav) => fav.url !== newFavorite.url);

    // atualizando lista
    setFavorite(newList);
  }
  console.log(favorite);
  return {
    favorite,
    addFavorite,
  };
}
