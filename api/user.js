module.exports = (app, db) => {
    app.get( "/user", (req, res) =>
      db.user.findAll().then(result => res.json(result))
    );
}