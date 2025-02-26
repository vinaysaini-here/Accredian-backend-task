import nodemailer from "nodemailer";

export const sendReferralEmail = async (email, name, referredBy) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Referral Confirmation",
    html: `<!DOCTYPE html>
  <html>
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Refer & Earn</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              background: #ffffff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
              text-align: center;
              padding: 20px;
              background: #007bff;
              color: white;
              font-size: 24px;
              border-radius: 8px 8px 0 0;
          }
          .content {
              padding: 20px;
              text-align: center;
              color: #333;
          }
          .cta-button {
              display: inline-block;
              background: #007bff;
              color: white;
              padding: 12px 24px;
              text-decoration: none;
              font-size: 18px;
              border-radius: 5px;
              margin-top: 20px;
          }
          .cta-button:hover {
              background: #0056b3;
          }
          .footer {
              text-align: center;
              padding: 20px;
              font-size: 14px;
              color: #777;
          }
          @media screen and (max-width: 600px) {
              .container {
                  width: 90%;
              }
              .header {
                  font-size: 20px;
                  padding: 15px;
              }
              .cta-button {
                  font-size: 16px;
                  padding: 10px 20px;
              }
          }
      </style>
  </head>
  <body>
  
      <div class="container">
          <div class="header">
              🎉 Invite Your Friends & Earn Rewards!
          </div>
  
          <div class="content">
              <p>Hi <strong>${name}</strong>,</p>
              <p>We’re excited to introduce our <strong>Refer & Earn</strong> program! Invite your friends to join Accredian, and for each successful referral, you’ll earn amazing rewards.</p>
              <p>Your referral was sent by <strong>${referredBy}</strong>.</p>
              <p>Click the button below to start referring:</p>
  
              <a href="https://accredian.com/" class="cta-button">Refer Now</a>
  
              <p>Thank you for being a part of our community!</p>
          </div>
  
          <div class="footer">
              © 2024 Accredian | <a href="https://accredian.com/" style="color: #007bff; text-decoration: none;">Visit Our Website</a>
          </div>
      </div>
  
  </body>
  </html>`,
  });
};
