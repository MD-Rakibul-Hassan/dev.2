const articals = require('../Database/articals_data');
const articalControllar = {};

articalControllar.postArtical = (req, res) => {
    const artical = req.body;
    console.log(artical);
    articals.push(artical);
    res.send({ status: true });
};

articalControllar.getAllArticals = (req, res) => {
    res.json(articals);
};

articalControllar.getSingleArtical = (req, res) => {
    const id = Number(req.params.id);
    let singleaArtical;
    articals.forEach((artical) => {
        if (artical.id === id) {
            singleaArtical = artical;
        }
    });
    res.json(singleaArtical);
};

module.exports = articalControllar;