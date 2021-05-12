import nanoexpress from "nanoexpress";
import fs from "fs";

let rawdata = fs.readFileSync("links.json");
let urls = JSON.parse(rawdata);
const app = nanoexpress();

app.get("/", async (req, res) => {
  return res.redirect("https://www.yanjobs.me");
});

app.get("/:id", async (req, res) => {
  let url = urls[req.params.id];
  return res.redirect(url);
});
app.listen(3000);
