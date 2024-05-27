import nodemailer from 'nodemailer'



interface EmailOptions {
  email: string;
  subject: string;
  message: string;
}
const sendEmail = async (option:EmailOptions) =>{
    try{
        const transporter = nodemailer.createTransport({
          service:"gmail",
          auth:{
            user:'projectemaildata@gmail.com',
            pass:"uumocljnoyxltefg"
          }
        });
        
        const mailOption ={
            from:option.email,
            to: 'projectemaildata@gmail.com',
            subject:option.subject,
            text:option.message
        }

        await transporter.sendMail(mailOption)
        console.log('email sent successfully')
    }catch (error) {
        console.error('Error sending email:', error) ;
        throw new Error('Failed to send email');
    }
}

export default sendEmail