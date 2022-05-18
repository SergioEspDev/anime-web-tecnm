import { useDetailAnime } from "../../hooks/useDetailAnime";
import { NotFoundScreen } from "../NotFound404/NotFoundScreen";
import { FavoriteCard } from "./FavoriteCard";
// import { Link } from 'react-router-dom';

export const FavoritesAnime = () => {

    const { favoriteList, } = useDetailAnime();
    
        return ( 
            <div className="favorite_wrapper">
                <h3> Favorites </h3>
                <div className="container_card"
                        style={{marginTop:"20px"}}>
                    {
                        favoriteList.length > 0
                        ? (favoriteList.map((favorite,idx)=>{
                            return(
                                <FavoriteCard key={idx} {...favorite}/>
                            )
                        }))
                        :(<NotFoundScreen/>)
                    }
                </div>
            </div>
        )
}
