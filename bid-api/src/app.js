const express = require('express');
const clubsRouters = require('./routers/clubs/clubsRouters');
const playersRouters = require('./routers/players/playersRouters');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(clubsRouters);
app.use(playersRouters);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));