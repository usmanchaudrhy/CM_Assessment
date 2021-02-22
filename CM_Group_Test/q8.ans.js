/**
 * Answer: Question 8
 * Author: Usman Khalid
 * 
 * Write a program to find all of the URLs to which those link tags link and 
 * verify that the URLs return a 200 response. In a given chunk of this HTML, 
 * we could have anywhere from 0 to 100+ links, so your solution should handle 
 * the case where there are plenty of links.
 */

const fs = require('fs');
const cheerio = require('cheerio'); // library to parse html
const request = require('request'); // library to check URL response

// html string is read from the file test.html in the same folder
const htmlToParse = fs.readFileSync('./test.html', 'utf8');

const data = cheerio.load(htmlToParse)
let links = new Set();

// read all anchor tags from the html
// and add all the hrefs to links set
const anchorTags = data('body').find('a').each(function(index, element){
    links.add(element.attribs.href);
})

// read all links tags
// add all href to links set
const linkTags = data('body').find('link').each(function(index, element){
    links.add(element.attribs.href);
})

// function to get response code for the given URL
function getStatus(url) {
    return new Promise((resolve, reject) => {
        request(url, function(error, response, body) {
            resolve({site: url, status: (!error && response.statusCode == 200) ? "OK": "Down: " + error.message});
        });
    })   
}

// convert the links sets to an array
links = Array.from(links);

// creates new promises for every URL, and print the status code with the site name
let promiseList = links.map(url => getStatus(url));
Promise.all(promiseList).then(resultList => {
    resultList.forEach(result => console.log(`${result.site} - Status: ${result.status}`));
});