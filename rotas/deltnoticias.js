module.exports = (app) => {
    app.delete("/delnoticias", async (req, res) => {
        try {
            const id = req.body.id;
            console.log(id);

            await app.dbClient.connect();

            const resultado = await app.dbClient
                .db('portalnoticias') // corrigido: estava "protalnoticias"
                .collection('noticias')
                .deleteOne({ _id: new ObjectId(id) });

            console.log(resultado);

            if (resultado.deletedCount === 0) {
                return res.status(404).send("Notícia não encontrada!");
            }

            res.status(200).send("Notícia deletada com sucesso!");

        } catch (error) {
            console.error("Erro ao deletar a notícia:", error);
            res.status(400).send("Erro ao deletar a notícia: " + error.message);
        }
    });
};

