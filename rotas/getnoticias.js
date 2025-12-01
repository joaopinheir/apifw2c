module.exports = (app) => {
  app.get("/noticias", async (req, res) => {
    try {
      await app.dbClient.connect();
      const users = await app.dbClient.db('portal')
            .collection('noticias')
            .find()
            .toArray();
      res.json(users);
    } catch (error) {
      res.send("erro:" + error)
    } finally {
      await app.dbClient.close()
    }
  })
}