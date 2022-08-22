import sendgrid from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    var data = {
        to: "maz.my.official@gmail.com", // Your email where you'll receive emails
        from: req.body.email,
        subject: `(Contact from MohdAzmin[dot]com) : ${ req.body.subject }`,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${ req.body.message }</p>
              <br>
              </div>
              <img src="https://mohdazmin.com/logo-ma.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Mohd Azmin<br>Software Developer</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://mohdazmin.com/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://mohdazmin.com/projects/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Project</a>
                <a href="https://github.com/mazfreelance/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://www.instagram.com/maz93je/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Instagram</a>
                <a href="https://www.linkedin.com/in/mazmin/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>
                
              </div>
              </div>
      </body>
      </html>`,
    }

    try {
        await sendgrid.send(data);
    } catch (error) {
        console.log('error', error);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
}

export default sendEmail