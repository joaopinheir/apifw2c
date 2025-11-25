module.exports = (app) => {
    app.put("/putnoticias", async (req, res) => {
        try {
            const id = req.body.id;
            const titulonoticias = req.body.titulonoticias;
            const conteudonoticias = req.body.conteudonoticias;
            const tiponoticias = req.body.tiponoticias;

            console.log("Atualizando notícia ID:", id);

            await app.dbClient.connect();

            const resultado = await app.dbClient
                .db("portalnoticias")
                .collection("noticias")
                .updateOne(
                    { _id: new ObjectId(id) }, // filtro
                    {
                        $set: {
                            titulonoticias: titulonoticias,
                            conteudonoticias: conteudonoticias,
                            tiponoticias: tiponoticias,
                            datahoraatualizacao: new Date()
                        }
                    }
                );

            console.log(resultado);

            if (resultado.matchedCount === 0) {
                return res.status(404).send("Notícia não encontrada!");
            }

            res.status(200).send("Notícia atualizada com sucesso!");

        } catch (error) {
            console.error("Erro ao atualizar a notícia:", error);
            res.status(400).send("Erro ao atualizar a notícia: " + error.message);
        }
    });
};
