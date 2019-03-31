module.exports = (app, db) => {
    app.get( "/users", (req, res) =>
      db.user.findAll().then(result => res.json(result))
    );

    app.post( "/users", (req, res) =>
      db.user.create(req)
    );
}