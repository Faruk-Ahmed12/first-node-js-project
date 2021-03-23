const express = require('express');


const app = express();

app.get('/', (reg, res) => {
    res.send('Thank You for calling Me, I know this is port')
})

app.listen(3000, () => console.log('Listenting to port 30000'));