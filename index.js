const express = require('express')
const app = express()
const Poruka = require('./models/poruka')
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
    Poruka.find({}).then(rez => {
        res.json(rez)
    })
})

app.get('/api/adresar/:id', (req, res, next) => {
    Poruka.findById(req.params.id)
    .then(poruka => {
        if(poruka){
            res.json(poruka)
        }else{
            res.status(404).end()
        }
    })
    .catch(error => {next(error)})
})

const errorHandler = (err, req, res, next) => {
    console.log(err.message);

    if (err.name === 'CastError') {
        return res.status(400).send({ error: 'krivi format ID-a' })
    } else if (err.name === 'ValidationError') {
        return res.status(400).send({ error: err.message })
    }
    next(err)
}

function zadnjiErrorHandler(err, req, res, next) {
    res.status(500)
    res.send('error', { error: err })
}

app.delete('/api/adresar/:id', (req, res) => {
    Poruka.findByIdAndRemove(req.params.id)
        .then(result => {
            res.status(204).end()
        })
        .catch(err => next(err))
})

/*
const generirajId = () => {
    const maxId = adresar.length > 0
        ? Math.max(...adresar.map(p => p.id))
        : 0
    return maxId + 1
}
*/

app.post('/api/adresar', (req, res, next) => {
    const podatak = req.body

    const poruka = new Poruka({
        ime: podatak.ime,
        mail: podatak.mail
    })

    poruka.save()
        .then(spremljenaPoruka => {
            res.json(spremljenaPoruka)
        })
        .catch(err => next(err))
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