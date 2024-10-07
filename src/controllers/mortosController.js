const Mortos = require("../models/Mortos");

async function cadastrarMorto(req, res) {
  const { nome, tamanho, causa, idade } = req.body;
  try {
    const novoMorto = new Cliente({ nome, tamanho, causa, idade });
    const mortoSalvo = await novoMorto.save();
    res.status(201).json({
      mensagem: "Morto cadastrado com sucesso",
      morto: mortoSalvo,
    });
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao cadastrar morto",
      erro: erro.message,
    });
  }
}

async function listarMortos(req, res) {
  try {
    const Mortos = await Mortos.find();
    res.status(200).json(mortos);
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao buscar ",
      erro: erro.message,
    });
  }
}

async function editarMorto(req, res) {
  const { id } = req.params;
  const { nome, tamanho, causa, idade } = req.body;
  try {
    const mortoEditado = await Mortos.findByIdAndUpdate(
      id,
      { nome, tamanho, causa, idade },
      { new: true, runValidators: true }
    );
    if (mortoEditado) {
      res.status(200).json({
        mensagem: "Morto editado com sucesso",
        morto: mortoEditado,
      });
    } else {
      res.status(404).json({ mensagem: "Morto não encontrado" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao atualizar morto",
      erro: erro.message,
    });
  }
}

async function deletarMorto(req, res) {
  const { id } = req.params;
  try {
    const mortoDeletado = await Mortos.findByIdAndDelete(id);
    if (mortoDeletado) {
      res.status(200).json({
        mensagem: "Morto deletado com sucesso",
        morto: mortoDeletado,
      });
    } else {
      res.status(404).json({ mensagem: "Morto não encontrado" });
    }
  } catch (erro) {
    res.status(500).json({
      mensagem: "Erro ao deletar morto",
      erro: erro.message,
    });
  }
}


module.exports = {
  cadastrarMorto,
  listarMortos,
  editarMorto, 
  deletarMorto
};