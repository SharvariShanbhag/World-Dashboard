import { sequelize } from "../config/db.js";

export const getTotalpopulation =async(req,res) => {
    try{
        const q1 =`select sum(Population) as totalpopulation from country;`
        const totalPopulation = await sequelize.query(q1);
        console.log({totalPopulation:totalPopulation[0], success:true})
    }catch(error){
        res.status(500).send({error})
    }
};

export const getTop10PopulatedCountries =async (req,res)=>{
    try{
        const q2=`select Name,Population from country order by population desc limit 10;`
        const top10PopulatedCountries = await sequelize.query(q2);
        console.log({top10PopulatedCountries:top10PopulatedCountries,success:true})
    }catch(error){
        res.status(500).send({error:error})
    }

}
export const getTop10LeastPopulatedCountries =async (req,res)=>{
    try{
        const q3 = `select Name,Population from country order by asc limit 10;`
        const top10LeastPopulatedCountries = await sequelize.query(q3);
        console.log({top10LeastPopulatedCountries:top10LeastPopulatedCountries,success:true})
}catch(error){
    res.status(500).send({error:error})
}
}
export const getAveragePopulation = async(req,res)=>{
    try{
        const q4 =`select avg(Population) as averagePopulation from country; `
        const averagePopulation = await sequelize.query(q4)
        console.log({averagePopulation:averagePopulation,success:true})
    }catch(error){
        res.status(500).send({error:error})
    }
}
export const getTotalPopulationByContinent = async(req,res)=>{
    try{
        const q5 =`select Continent, sum(Population) as CPopulation from country group by Continent;`
        const totalPopulationByContinent = await sequelize.query(q5)
        console.log({totalPopulationByContinent:totalPopulationByContinent,success:true})
    }catch(error){
        res.status(500).send({error:error})
    }
}
export const getTotalCountries =async (req,res)=>{
    try{
        const q6 =`select * from country;`
        const totalCountries = await sequelize.query(q6)
        console.log({totalCountries:totalCountries,success:true})
    }catch(error){
        res.status(500).send({error:error})
    }
}
export const getTotalLanguages = async(req,res)=>{
    try{
        const q7 =`select * from countrylanguage;`
        const totalLanguages = await sequelize.query(q7)
        console.log({totalLanguages:totalLanguages,success:true})
    }catch(error){
        res.status(500).send({error:error})
    }
}

export const getTop10Languages =async (req,res)=>{
    try{
        const q8 = `select Language ,Percentage from countrylanguage order by Percentage desc limit 10;`
        const top10Languages =await sequelize.query(q8)
        console.log({top10Languages:top10Languages,success:true})
    }catch(error){
        res.status(500).send({error:error})
    }
}
export const getLargestCities =async (req,res)=>{
    try{
        const q9 = `select SurfaceArea ,Name from country order by SurfaceArea desc limit 10;`
        const largestCities = await sequelize.query(q9)
        console.log({largestCities:largestCities, success:true})
    }catch(error){
        res.status(error(500).send({error:error}))
    }
}
