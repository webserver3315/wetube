import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res, next) => res.send("Home");
const handleAbout = (req, res, next) => res.send("About Us");
const handleContact = (req, res, next) => res.send("Contact");
const handleProtected = (req, res, next) => res.send("PROTECTED");

const betweenHome = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

const betweenHome2 = (req, res, next) => {
  //   console.log("Between2");
  res.redirect("/");
};

app.use(betweenHome);
app.get("/", handleHome);
app.get("/about-us", handleAbout);
app.get("/contact", handleContact);
app.get("/protected", betweenHome2, handleProtected);

app.listen(PORT, handleListening);
