const express = require(`express`);
const app = express();
const { connectDB } = require(`./config/db`);
const User = require(`./models/user`);
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({extended: false}));

connectDB();

// get users
app.get(`/users`, async (req, res) => {
  try {
    const data = await User.find();
    res.json({data});
  } catch (error) {
    console.log(`can't get user data ...`);
  }
});

// add new user
app.post(`/newUser`, async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new User({ 
      name: userData.name,
      age: userData.age,
      email: userData.email
     });
    await newUser.save();
    res.json({
      sucess: true,
      message: `user added successfully.`
    });
  } catch (error) {
    console.log(`can't add new user ...`);
  }
});

app.listen(port, () => {
  console.log(`server listening to port ${port} ...`);
});