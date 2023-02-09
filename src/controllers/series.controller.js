import { Series } from "../models/Series.js";

export const getSeries = async (req, res) => {
  try {
    const series = await Series.findAll();
    res.json(series);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
};
export const createSerie = async (req, res) => {
  const {
    titulo,
    descripcion,
    fecha_de_estreno,
    estrellas,
    genero,
    precio_alquiler,
    atp,
    estado,
  } = req.body;
  try {
    const newSerie = await Series.create({
      titulo,
      descripcion,
      fecha_de_estreno,
      estrellas,
      genero,
      precio_alquiler,
      atp,
      estado,
    });
    res.json(newSerie);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const modifySerie = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      titulo,
      descripcion,
      fecha_de_estreno,
      estrellas,
      genero,
      precio_alquiler,
      atp,
      estado,
    } = req.body;
    const serieToModify = await Series.findByPk(id);
    serieToModify.titulo = titulo;
    serieToModify.descripcion = descripcion;
    serieToModify.fecha_de_estreno = fecha_de_estreno;
    serieToModify.estrellas = estrellas;
    serieToModify.genero = genero;
    serieToModify.precio_alquiler = precio_alquiler;
    serieToModify.atp = atp;
    serieToModify.estado = estado;

    await serieToModify.save();

    res.json(serieToModify)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSeries = async (req, res) => {
  try {
    const { id } = req.params;
    await Series.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
