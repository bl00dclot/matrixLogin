import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

let footLog = morgan(":date[web] :remote-addr :total-time[3]");

app.get("/", (req, res) => {
    res.render("index.ejs", {footLog: footLog})
})
app.get("/register", (req, res) => {
    res.render("register.ejs")
})

app.get("/login", (req, res) => {
    res.render("signIn.ejs")
})
app.post("/loginsubmit", (req, res) => {
    let d = new Date();
    const userN = req.body["username"];
    const passW = req.body["password"];
    res.render("signIn.ejs", {
        displayUserN : userN, 
        displayPassW: passW, 
        ip: req.ip,
        currentDate: d.toString()
    })
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });