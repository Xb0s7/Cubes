// TODO: Require Controllers...

module.exports = (app) => {
    app.get('/', (req, res) =>{
        res.render('index', {title: 'Home Page'})
    })
    app.get('/about', (req, res) =>{
        res.render('about', {title: 'About Page'})
    })
    app.get('/create', (req, res) =>{
        res.render('create', {title: 'Create Cube'})
    })
    app.get('/details:id', (req, res) =>{
        res.render('details', {title: 'Details'})
    })
    app.get('*', (req, res) =>{
        res.render('404', {title: 'Error'})
    })
};