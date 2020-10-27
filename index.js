const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.static('build'))

let adresar = [
    {
        id: 1,
        ime: 'Ante Antic',
        mail: 'ante@gmail.com'
    },
    {
        id: 2,
        ime: 'Ivan Ivić',
        mail: 'ivan@gmail.com'
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Pozdrav od Express servera</h1>')
})

app.get('/api/adresar', (req, res) => {
    res.json(adresar)
})

app.get('/api/adresar/:id', (req, res) => {
    const id = Number(req.params.id)
    const kontakt = adresar.find(p => p.id === id)

    if(kontakt){
        res.json(kontakt)
    } else{
        res.status(404).end()
    }
})


app.delete('/api/adresar/:id', (req, res) => {
    const id = Number(req.params.id)
    adresar = adresar.filter(p => p.id !== id)
    res.status(204).end()
})


const generirajId = () => {
    const maxId = adresar.length > 0
        ? Math.max(...adresar.map(p => p.id))
        : 0
    return maxId + 1
}

app.post('/api/adresar', (req, res) => {
    const podatak = req.body
    if(!podatak.ime || !podatak.mail){
        return res.status(400).json({
            error: 'Nedostaje sadrzaj'
        })
    }

    const kontakt = {
        id: generirajId(),
        ime: podatak.ime,
        mail: podatak.mail
    }
    adresar = adresar.concat(kontakt)
    res.json(kontakt)
})


app.put('/api/adresar/:id', (req, res) => {
    const objekt = req.body
    const id = Number(req.params.id)
    adresar = adresar.map(p => p.id !== id ? p : objekt)
    res.json(objekt)
})

const zahtjevInfo = (req, res, next) => {
    console.log('Metoda:', req.method)
    console.log('Putanja:', req.path)
    console.log('Tijelo:', req.body)
    console.log('---')
    next()
}
app.use(zahtjevInfo)

const nepoznataRuta = (req, res) => {
    response.status(404).send({ error: 'nepostojeca ruta' })
}
app.use(nepoznataRuta)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Posluzitelj je pokrenut na portu ${PORT}`);
})