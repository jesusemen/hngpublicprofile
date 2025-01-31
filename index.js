const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('', (req, res) => {
    const currentDateTime = new Date().toISOString();

    const response = {
         email: "jay.ehimiyein@gmail.com",
         current_datetime: currentDateTime,
         github_url: "https://github.com/jesusemen/hngpublicprofile.git"
    };

    res.json(response);

});

const port = 3000;
app.listen(port, () => {
    console.log(`node server is running on http://localhost:${port}`);

});