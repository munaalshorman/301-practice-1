'use strict'

$.get('./data.json').then(data=>
    data.forEach(data => {
        $('ul').append(`<li> ${data.name}  ${data.age} years old</li>`)
    }));
