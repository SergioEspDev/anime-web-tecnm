import { Link } from "react-router-dom"

export const NotFoundScreen = () => {
    return (
        <div className="img-notFound">
            <img src="https://raw.githubusercontent.com/riimuru/AnimeLazer/a98a2f1b1127a68011c600f1bc43b967a5735d1f/public/404light.svg" alt="notFoundPage404"/>

            <div className="text-notFound">
                No tienes animes agregados aun. Descubre algunos <Link to="/">aqui.</Link>
            </div>
        </div>
    )
}
