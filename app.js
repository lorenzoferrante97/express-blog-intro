// start code

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Server del mio blog');

    const posts = [
        {
            titolo: "Ricetta 1",
            contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
            immagine: "public/imgs/ciambellone.jpeg",
            tags: ["ricetta", "dolce", "ciambellone"]
        },
        {
            titolo: "Ricetta 2",
            contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
            immagine: "public/imgs/cracker_barbabietola.jpeg",
            tags: ["ricetta", "salato", "barbabietola"]
        },
        {
            titolo: "Ricetta 3",
            contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
            immagine: "public/imgs/pane_fritto_dolce.jpeg",
            tags: ["ricetta", "dolce", "pane"]
        },
        {
            titolo: "Ricetta 4",
            contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
            immagine: "public/imgs/pasta_barbabietola.jpeg",
            tags: ["ricetta", "pasta", "barbabietola"]
        },
        {
            titolo: "Ricetta 5",
            contenuto: "Descrizione della ricetta, ingredienti, tempi di preparazione e come eseguirla con i relativi passaggi",
            immagine: "public/imgs/torta_paesana.jpeg",
            tags: ["ricetta", "dolce", "torta"]
        },
    ];
});

// rotta bacheca

app.get('/bacheca', (req, res) => {

    res.send('Sono nella bacheca');

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})