
const router = require('express').Router();
const pool = require("../db");

router.get("/api/lines", async(req, res)=>{
    try{
        const allLines = await pool.query("SELECT name, description, ST_AsGeojson(geom)::json as polygon FROM public.lines");
        res.json(allLines.rows);

    }catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
});

module.exports = router;