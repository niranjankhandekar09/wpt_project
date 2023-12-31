const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

// Routers
const patientlistRouter = require('./routes/Ptrecord')
app.use("/patient", patientlistRouter);

const testslistRouter = require('./routes/Tests')
app.use("/test", testslistRouter);

const orderRouter = require('./routes/Orders')
app.use("/order", orderRouter);

const usersRouter = require('./routes/Users')
app.use("/auth", usersRouter);




db.sequelize.sync().then( () => {
    app.listen(3001, () => {
        console.log("The server is running smoothly on port 3001");
    });
});
