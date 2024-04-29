import * as movieService from "../services/movieService";

export const getAllMovies = async(req, res) => {
    try {
        const movies = await movieService.findMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};