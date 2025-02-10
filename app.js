// start code

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.send('Server del mio blog');

});

// rotta bacheca

app.get('/bacheca', (req, res) => {

    let posts = [

        {
            titolo: "Ricetta 1",
            contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
            immagine: "imgs/ciambellone.jpeg",
            tags: ["ricetta", "dolce", "ciambellone"]
        },
        {
            titolo: "Ricetta 2",
            contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
            immagine: "imgs/cracker_barbabietola.jpeg",
            tags: ["ricetta", "salato", "barbabietola"]
        },
        {
            titolo: "Ricetta 3",
            contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
            immagine: "imgs/pane_fritto_dolce.jpeg",
            tags: ["ricetta", "dolce", "pane"]
        },
        {
            titolo: "Ricetta 4",
            contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
            immagine: "imgs/pasta_barbabietola.jpeg",
            tags: ["ricetta", "pasta", "barbabietola"]
        },
        {
            titolo: "Ricetta 5",
            contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
            immagine: "imgs/torta_paesana.jpeg",
            tags: ["ricetta", "dolce", "torta"]
        },
    ];

    // res -> risultato finale da mandare
    res.json(posts);


});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// end code