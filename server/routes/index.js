var express = require('express');
var router = express.Router();

const ENDPOINT = require("../endpoint");
const login = require('../login');
const encode = require("../encode");
const list = require("../list");

router.get(ENDPOINT.LIST, function(req, res) {
    res.json(list.items);
})

router.post(ENDPOINT.LIST, function(req, res) {
    let listItem = {
        text: encode(req.body.text),
        _id: list.id
    }
    list.items.unshift(listItem);
    res.json(listItem);
    list.id++;
})

router.delete(ENDPOINT.LIST + "/:_id", function(req, res) {
    const { _id } = req.params;
    var index = list.items.findIndex(
        listItem => listItem._id === Number(_id)
        );
        if (index > -1) {
            list.items.splice(index, 1);
            res.json({ _id: Number(_id), text: "This commented was deleted" });
        } else {
            res.status(404).send("Could not find item with id:" + _id);
        }
    });
    
router.post(ENDPOINT.LOGIN, login);

module.exports = router;    