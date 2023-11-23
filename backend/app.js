const path = require('path');
require('dotenv').config();
const cors = require('cors');

const express = require('express')
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const Admin = require('./models/Admin');
const Student = require('./models/Student')
Admin.hasMany(Student);
Student.belongsTo(Admin)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://localhost:3000',
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // credentials: true, 
    // optionsSuccessStatus: 204,
  };
  
  app.use(cors(corsOptions));  

// app.use(express.static('public'));

const adminRoutes = require('./routes/Admin')
const studentRoutes = require('./routes/Student')

app.use('/admin',adminRoutes)
app.use('/student',studentRoutes)
// app.use('/purchase',purchaseRoutes)
// app.use('/report',reportRoutes)
// app.use('/',expenseRoutes)


sequelize.sync()
.then(() =>{
    app.listen(4000)
})
.catch(err =>{
    console.log(err)
})