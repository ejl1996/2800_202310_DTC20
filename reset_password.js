//Render password reset page 
app.get('reset_password', (req, res) => {
    res.render('password-reset');
});

//Handle forgot password request 
app.post('/forgot-password', (req, res) => {
    const { email } = req.body;

    // Generate a unique token
    const token = crypto.randomBytes(20).toString('hex');

    // Store the token in the in-memory storage (replace with as database in production)
    passwordResetTokens[token] = {
        userId: '123', // Replace with the actual user ID
        expiration: Date.now() + 3600000, // Token expiration time (1 hour from now)
    };

    // Send the password reset link to the user (replace with your own logic)
    const resetLink = `http://example.com/reset-password?token=${token}`;
    // Send the resetLink to the user's email or other communication method

    res.send('Password reset link has been sent to your email!');
});