import express from 'express';

import{
    getTotalpopulation,
    getTop10PopulatedCountries,
    getTop10LeastPopulatedCountries,
    getTotalCountries,
    getAveragePopulation,
    getTotalPopulationByContinent,
    getTop10Languages,
    getTotalLanguages,
    getLargestCities
}from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/total-population", getTotalpopulation);
router.get("/top10populatedcountries",getTop10PopulatedCountries);
router.get("/top10leastpopulatedcountries",getTop10LeastPopulatedCountries);
router.get("/total-countries", getTotalCountries);
router.get("/average-population", getAveragePopulation);
router.get("/total-population-by-continent", getTotalPopulationByContinent);
router.get("/total-languages", getTotalLanguages);
router.get("/top-10-languages", getTop10Languages);
router.get("/largest-cities", getLargestCities);

export default router;