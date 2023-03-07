
const router = require('express').Router();
const pool = require("../db");

// Get all lines
router.get("/api/lines", async(req, res)=>{
    try{
        const allLines = await pool.query("SELECT name, description, ST_AsGeojson(geom)::json as polygon FROM public.lines");
        res.json(allLines.rows);

    }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
});

// Get a line

// Create a line
router.post("/api/lines", async(req, res) => {
    try {
        const { name, description, geom} = req.body
        const querystring = `INSERT INTO lines (name, description, geom) VALUES ('${name}', '${description}', ST_GeomFromGeoJSON('${JSON.stringify(geom)}'))`
        const newLine = pool.query(querystring)
        console.log(querystring)
        
        //res.json(newLine)
    } catch (error) {
        console.error(error.message)
    }
})

// Delete a line



module.exports = router;