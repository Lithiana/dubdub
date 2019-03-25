module.exports = (app, db) => {
    app.get( "/event", (req, res) =>
        db.event.findAll({ attributes: ['id', 'nom'] }).then(result => res.json(result))
    );

    app.get( "/event/:id", (req, res) =>
        db.event.findAll({ where: { id: req.params.id } }).then(result => res.json(result))
  );
}