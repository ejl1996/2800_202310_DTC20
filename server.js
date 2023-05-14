const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const config = require('./config.js')
const OAuth2 = google.auth.OAuth2

const OAuth2_client = new OAuth2(config.clientId, config.clientSecret)
OAuth2_client.setCredentials({ refresh_token: config.refreshToken })

function send_mail(name, recipient) {
    const accessToken = OAuth2_client.getAccessToken()

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: config.user,
            clientId: config.clientId,
            clientSecret: config.clientSecret,
            refreshToken: config.refreshToken,
            accessToken: accessToken
        }
    })

    const mail_options = {
        from: `Recall RX <${config.user}>`,
        to: recipient,
        subject: 'Password Reset for Recall RX',
        html: get_html_message(name)
    }

    transport.sendMail(mail_options, function (error, result) {
        if (error) {
            console.log('Error: ', error)
        } else {
            console.log('Success: ', result)
        }
        transport.close()
    })
}

function get_html_message(name) {
    return `
    <h3> ${name}! Here is the link to reset your password: https://salmon-bat-cuff.cyclic.app/signup <h3>
    `
}

send_mail('Emma', 'jy.lee.emma@gmail.com')