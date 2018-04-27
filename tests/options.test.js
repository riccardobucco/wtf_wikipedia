'use strict';
var test = require('tape');
var readFile = require('./lib/_cachedPage');

test('royal_cinema', t => {
  var doc = readFile('royal_cinema');
  t.equal(doc.images().length, 1, 'image-length');
  t.equal(doc.categories().length, 4, 'category-length');
  t.equal(doc.citations().length, 4, 'citations-length');
  t.equal(doc.infoboxes().length, 1, 'infoboxes-length');

  doc = readFile('royal_cinema', {
    categories: false,
    citations: false,
    images: false,
    infoboxes: false
  });
  t.equal(doc.images().length, 0, 'post-image-length');
  t.equal(doc.categories().length, 0, 'post-category-length');
  t.equal(doc.citations().length, 0, 'post-citations-length');
  t.equal(doc.infoboxes().length, 0, 'post-infoboxes-length');
  t.end();
});

test('other-pages', t => {
  var pages = [
    'earthquakes',
    'United-Kingdom',
    'Chemical-biology',
    'University-of-Nevada,-Reno-Arboretum',
    'Clint-Murchison-Sr.',
    'Wendy-Mogel',
    'Damphu-drum',
    'africaans',
    'Direct-representation',
    'al_Haytham',
  ];
  pages.forEach((page) => {
    var options = {
      categories: false,
      citations: false,
      images: false,
      infoboxes: false
    };
    var doc = readFile(page, options);
    t.equal(doc.images().length, 0, page + '-image-length');
    t.equal(doc.categories().length, 0, page + '-category-length');
    t.equal(doc.citations().length, 0, page + '-citations-length');
    t.equal(doc.infoboxes().length, 0, page + '-infoboxes-length');
  });
  t.end();
});
