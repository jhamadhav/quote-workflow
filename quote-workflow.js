const fs = require('fs');
const http = require('https');
// const fetch = require('node-fetch')

const init = async () => {

    let readData = fs.readFileSync('README.md', 'utf8')
    readData = readData.toString()

    http.request("https://quotable.io/random", function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {

            data = JSON.parse(chunk)
            console.log(data);

            let quoteTxt = `<!-- QUOTE:START -->\n<a href="https://github.com/jhamadhav/quote-workflow" style="text-decoration:none;color:inherit;"><p align="center"><br><i>${data.content}</i><br><i>– ${data.author}.</i><br></p></a>\n<!-- QUOTE:END -->`;

            readData = readData.replace(/(?:<!-- QUOTE:START -->)([\s\S]*)(?:<!-- QUOTE:END -->)/g, quoteTxt)

            console.log(quoteTxt)

            fs.writeFile("README.md", readData, function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });

        });
    }).end();


}

init()

