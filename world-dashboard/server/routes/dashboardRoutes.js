const express = require('express')
const dahsboardController = require("../controller/dahsboardController")
const router = express.Router()

router.get("/totalPopulation-Countries", dahsboardController.totalPopulationCountries)
router.get("/topTenPopCountries", dahsboardController.topTenPopCountries)
router.get("/avgPopulationInContry", dahsboardController.avgPopulationInContry)
router.get("/totalPopulationByContinent", dahsboardController.totalPopulationByContinent)
router.get("/countriesWithPopulationGreater", dahsboardController.countriesWithPopulationGreater)
router.get("/countriesWithPopulationless", dahsboardController.countriesWithPopulationless)



module.exports = router