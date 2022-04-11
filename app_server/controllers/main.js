const index = (req, res) => { // when a request comes in assign it to
    pageTitle = process.env.npm_package_description + ' - Main';
    res.render('index', {title: pageTitle});
};

module.exports = {
    index
}