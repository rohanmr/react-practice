const db = require('../config/db')

// Total Population and Tootal Countries 

const totalPopulationCountries = async (req, res) => {
    try {
        const [result] = await db.query("select sum(Population) as totalPop ,COUNT(*) AS TotalCountries ,sum(SurfaceArea) as surfaceArea,AVG(Population) AS AvgPop from country;")
        res.status(200).send(result[0], result[1])
    } catch (error) {
        res.status(500).send({ msg: "Server Error" })
    }
}

// Top 10 Population Countries

const topTenPopCountries = async (req, res) => {
    try {
        const [result] = await db.query("SELECT Name, Population FROM country ORDER BY Population DESC LIMIT 10;")
        res.status(200).send(result)

    } catch (error) {
        res.status(500).send({ msg: "Server Error" })
    }
}

// Avg Population Countries

const avgPopulationInContry = async (req, res) => {
    try {
        const [result] = await db.query("SELECT AVG(Population) AS AveragePopulation FROM country;")
        res.status(200).send(result[0])

    } catch (error) {
        res.status(500).send({ msg: "Server Error" })
    }
}

//Total Population By Continent

const totalPopulationByContinent = async (req, res) => {
    try {
        const [result] = await db.query("SELECT Continent, SUM(Population) AS TotalPopulation FROM country GROUP BY Continent limit 5;")
        res.status(200).send(result)

    } catch (error) {
        res.status(500).send({ msg: "Server Error" })

    }
}

//countries with a population greater than 10000000

const countriesWithPopulationGreater = async (req, res) => {
    try {
        const [result] = await db.query("select Name, Continent,Region,Population,Capital from country where Population >= 1000000 order by Population desc  ;")
        res.status(200).send(result)

    } catch (error) {
        res.status(500).send({ msg: "Server Error" })

    }
}

// countries with a population less than 1000000

// const countriesWithPopulationless = async (req, res) => {
//     try {
//         const [result] = await db.query("SELECT Name, Population FROM country WHERE Population < 1000000 ORDER BY Population ASC;")
//         res.status(200).send(result)

//     } catch (error) {
//         res.status(500).send({ msg: "Server Error" })

//     }

// }

//Get BY Country Name By Using req.query

const getByCountryName = async (req, res) => {
    try {
        const { cname } = req.query;
        const Searchquery = `SELECT Name, Population FROM country WHERE Name =? ;`
        const [result] = await db.query(Searchquery, [cname])
        res.status(200).send(result[0])
    } catch (error) {
        res.status(500).send({ msg: "Server Error" })

    }
}




module.exports = {
    totalPopulationCountries,
    topTenPopCountries,
    avgPopulationInContry,
    totalPopulationByContinent,
    countriesWithPopulationGreater,
    // countriesWithPopulationless,
    getByCountryName
}