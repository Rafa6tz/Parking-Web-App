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
    "INSERT INTO rapido(`nome`, `telefone`, `placa`, `hora`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.telefone,
        req.body.placa, 
        req.body.hora, 
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado")
    })
}

export const updateUser = (req, res) => {
    const q =
    "UPDATE rapido SET `nome` = ?, `telefone` = ?, `placa` = ?, `hora` = ? WHERE `id`= ?";

    const values = [
        req.body.nome,
        req.body.telefone,
        req.body.placa, 
        req.body.hora, 
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


// Mensalistas
export const getUsersm = (_, res) => {
    const q = "SELECT * FROM mensalista";

    db.query(q, (err, data) =>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const addUserm = (req, res) => {
    const q =
    "INSERT INTO mensalista(`nome`, `telefone`, `cpf`, `placa`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.telefone,
        req.body.cpf,
        req.body.placa, 
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado")
    })
}

export const updateUserm = (req, res) => {
    const q =
    "UPDATE mensalista SET `nome` = ?, `telefone` = ?, `cpf` = ?, `placa` = ? WHERE `id`= ?";

    const values = [
        req.body.nome,
        req.body.telefone,
        req.body.cpf,
        req.body.placa, 
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Atualizado")
    })
}


export const deleteUserm = (req, res) => {
    const q =
    "DELETE FROM mensalista WHERE `id` = ?"

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Deletado")
    })
}