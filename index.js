const express = require('express');
const app = express();
const port = 5000;

const mahasiswa = [{"nim" : "Sanjaya"}]


app.get('/', (req, res) => {
    res.send('Get-Home Page')
});

app.get('/mahasiswa', (req, res) => {
    res.send(`${mahasiswa}`)
});

app.post('/', (req, res) => {
    res.send('Post Data')
})

app.put('/', (req, res) => {
    res.send('Update data sukses!')
})

app.delete('/', (req, res) => {
    res.send('Hapus data berhasil')
})

app.listen(port, () => {
    console.log(`Server bejalan pada localhost:${port}`)
});