const {filterByGenre}= require ("../controllers/filterByGenre")


const filterByGenreHandler= async (req, res)=>{
    const {genre}= req.params
    const genreFinally= genre.toLowerCase()
    //console.log(genreFinally)
    try {
        const filterGenre= await filterByGenre(genreFinally)
        if(filterGenre.length === 0) return res.status(200).send("There are no products whit that genre.Remember: Men, Women and Kids ")

        res.status(200).json(filterGenre)
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }
}

module.exports={
    filterByGenreHandler
}