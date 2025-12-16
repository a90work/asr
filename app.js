const express = require("express");
const app = express();

// گرفتن اطلاعات فرم
app.use(express.urlencoded({ extended: true }));

// فایل‌های HTML و CSS
app.use(express.static("public"));

app.post("/admin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (email === "asr@gmail.com" && password === "1390") {
    res.send("Welcome alireza");
  } else {
    res.send("Wrong email or password");
  }
});

// 👇 پورت استاندارد برای هاست
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
