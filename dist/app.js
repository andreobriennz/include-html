'use strict';

var getAllWithAttribute = function getAllWithAttribute(attribute) {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++) {
        if (allElements[i].getAttribute(attribute) !== null) {
            matchingElements.push(allElements[i]);
        }
    }
    return matchingElements;
};

var include = [];

// include['counter'] = 0;
// include['data-include'] = () => ( include['counter'] === 0 ? 'data-include' : 'data-include-'+include['counter'])
// include['[data-include]'] = () => '[' + include['data-include']() + ']'

// fetch html
include['fetch'] = function (element, url) {
    fetch(url).then(function (data) {
        data.text().then(function (html) {
            element.innerHTML = html;

            element.removeAttribute('data-include');
        });
    }).catch(function (error) {
        console.error('[include.js error getting \'' + url + '\']', error);
    });
};

// loop through html includes
include['html'] = function (elements, callback) {
    var totalElements = elements.length;
    console.log(elements);
    for (var el = 0; el < totalElements; el++) {
        var element = elements[el];
        var url = element.getAttribute('data-include');

        console.log(url);
        include['fetch'](element, url);
    };

    setTimeout(function () {
        callback();
    }, 250);
};

var callbackWithAttributes = function callbackWithAttributes() {
    if (getAllWithAttribute('data-include').length > 0) {
        include['html'](getAllWithAttribute('data-include'), callbackWithAttributes);
    }
};

include['html'](getAllWithAttribute('data-include'), callbackWithAttributes);

var router = {
    setRoute: function setRoute(route) {},
    getPage: function getPage() {}
};