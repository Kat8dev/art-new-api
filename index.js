import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';
import cors from 'cors';

const app = express();
app.use(cors());

const port = process.env.PORT || 8000;

const newspapers = [
  {
    name: 'nyt',
    address: 'https://www.nytimes.com/section/arts',
    base: 'https://www.nytimes.com/section/arts',
  },
  {
    name: 'latimes',
    address: 'https://www.latimes.com/entertainment-arts',
    base: '',
  },
  {
    name: 'smh',
    address: 'https://www.smh.com.au/culture/art-and-design',
    base: 'https://www.smh.com.au',
  },
  {
    name: 'bbc',
    address: 'https://www.bbc.com/culture/columns/art',
    base: 'https://www.bbc.co.uk',
  },
  {
    name: 'es',
    address: 'https://www.standard.co.uk/culture/art-of-london-after-dark',
    base: 'https://www.standard.co.uk',
  },
  {
    name: 'cityam',
    address: 'https://www.cityam.com/culture/',
    base: '',
  },
  {
    name: 'thetimes',
    address: 'https://www.thetimes.co.uk/arts-culture',
    base: '',
  },
  {
    name: 'guardian',
    address: 'https://www.theguardian.com/artanddesign',
    base: 'https://www.theguardian.com/',
  },
  {
    name: 'telegraph',
    address: 'https://www.telegraph.co.uk/culture/',
    base: 'https://www.telegraph.co.uk',
  },
];

const articles = [];

newspapers.forEach((newspaper) => {
  axios
    .get(newspaper.address)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);

      $('a:contains("art")', html).each(function () {
        const title = $(this).text();
        const url = $(this).attr('href');

        articles.push({
          title,
          url: newspaper.base + url,
          source: newspaper.name,
        });
      });
    })
    .catch((err) => console.log(err));
});

app.get('/', (req, res) => {
  res.json('Welcome to my Art News API');
});

app.get('/news', (req, res) => {
  res.json(articles);
});

app.get('/news/:newspaperId', (req, res) => {
  const newspaperId = req.params.newspaperId;

  const newspaperAddress = newspapers.filter(
    (newspaper) => newspaper.name == newspaperId
  )[0].address;
  const newspaperBase = newspapers.filter(
    (newspaper) => newspaper.name == newspaperId
  )[0].base;

  axios
    .get(newspaperAddress)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const specificArticles = [];

      $('a:contains("art")', html).each(function () {
        const title = $(this).text();
        const url = $(this).attr('href');
        specificArticles.push({
          title,
          url: newspaperBase + url,
          source: newspaperId,
        });
      });
      res.json(specificArticles);
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => console.log('Backend server is running'));
