const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: "jessezhang18@gmail.com", 
    from: "jessezhang17@gmail.com",
    subject: "Message from " + name,
    text: name + ", " + email + ", " + "message",
    html: "<p>" + name + ", " + email + ", " + message + "<p>",
  };

  mail
    .send(msg)
    .then(() => {
      return res.status(200).json({ status: "OK" });
    })
    .catch((error) => {
      return res.status(500).json({ status: "Internal Server Error"})
    });
};
