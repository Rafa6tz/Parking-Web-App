import {db} from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM rapido";

    db.query(q, (err, data) =>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const addUser = (req, res) => {
    const q =
    "INSERT INTO rapido(`nome`, `telefone`, `placa`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.telefone,
        req.body.placa, 
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado")
    })
}

export const updateUser = (req, res) => {
    const q =
    "UPDATE rapido set `nome` = ?, `telefone` = ?, `placa` = ? WHERE `id`= ?";

    const values = [
        req.body.nome,
        req.body.telefone,
        req.body.placa, 
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Atualizado")
    })
}


export const deleteUser = (req, res) => {
    const q =
    "DELETE FROM rapido WHERE `id` = ?"

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Deletado")
    })
}