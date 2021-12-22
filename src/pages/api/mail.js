const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: "jessezhang18@gmail.com",
    from: "jessezhang17@gmail.com",
    subject: "Message from " + name,
    text: `Name: ${name}, Email: ${email}, Message: ${message}`,
    html: `<p><strong>Name: </strong> ${name} <br> <strong>Email: </strong> ${email} <br> <strong>Message: </strong> ${message}</p>`,
  };

  try {
    await mail.send(msg);
    res.status(200).json({ status: "OK" });
  } catch (error) {
    res.status(500).json({ status: "Internal Server Error" });
  }
};
