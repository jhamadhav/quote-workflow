const fs = require('fs');
const http = require('https');
// const fetch = require('node-fetch')

const init = async () => {

    let readData = fs.readFileSync('README.md', 'utf8')

    http.request("https://quotable.io/random", function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {

            data = JSON.parse(chunk)
            console.log(data);

            let quoteTxt = `<p align="center">
            <br>
            <i>${data.content}</i>
            <br>
            <i>– ${data.author}.</i>
            <br>
         <br>`
            readData = readData.replace(/<!-- QUOTE:START -->(.|\n)*<!-- QUOTE:END -->/gm, quoteTxt)

            console.log(readData)

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

