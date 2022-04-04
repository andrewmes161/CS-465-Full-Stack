const index = (req, res) => { // when a request comes in assign it to
    res.render('index', {title: 'Travlr Getaways'});
};

module.exports = {
    index
}