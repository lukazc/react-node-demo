const encode = require('./encode');
const shortLoremIpsum = `During the late 1990s and early 2000s, it was common for designers to use the “copy and paste” method of adding lorem ipsum as filler text. Many still do.`;
const longLoremIpsum = 'The ape lineage which would lead to Homo sapiens diverged from the lineage that would lead to chimpanzees and bonobos, the closest living relatives of modern humans, around 4.6 to 6.2 million years ago. Anatomically modern humans arose in Africa about 300,000 years ago, and reached behavioural modernity about 50,000 years ago.';

const list = {};

list.id = 3;

list.items = [
    {
        text: encode(shortLoremIpsum),
        _id: 1
    },
    {
        text: encode(longLoremIpsum),
        _id: 2
    }
];


module.exports = list;
