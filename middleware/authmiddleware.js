module.exports = {
  ensureAuth: (req, res, next) => {
    if (req.session.user) {
      return next(); // User is logged in, proceed
    }
    res.redirect('/auth/login'); // Not logged in, go to login page
  }
};
