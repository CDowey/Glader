
const router = require('express').Router();
const pool = require("../db");

// Get all glades
router.get("/api/glades", async(req, res)=>{

    try{
        const allGlades = await pool.query("SELECT name, description, ST_AsGeojson(geom)::json as polygon FROM public.glades");
        res.json(allGlades.rows);

    }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
});

// Get a glade



module.exports = router;
