import { Request, Response } from "express";
import { car_size as CarSize } from "../models/carSize";

export const getSizes = async (req: Request, res: Response) => {
  try {
    const sizes = await CarSize.findAll();

    return res.status(200).json({
      message: "Get all sizes success",
      data: sizes,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getSizeById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const size = await CarSize.findOne({ where: { id: id } });

    if (!size) return res.status(404).json({ message: "Data null" });

    return res.status(200).json({
      message: "Get size by id success",
      data: size,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSize = async (req: Request, res: Response) => {
  const { size } = req.body;

  try {
    if (!size) return res.status(400).json({ message: "Data not null" });

    const addSize = await CarSize.create({
      ...req.body,
      size,
    });

    return res.status(200).json({
      message: "Create data success",
      data: addSize,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateSize = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { size } = req.body;

  try {
    if (!size) return res.status(400).json({ message: "Data not null" });

    const editSize = await CarSize.update(
      { ...req.body, size },
      { where: { id: id } }
    );

    if (editSize[0] === 0)
      return res.status(404).json({ message: "Data not found" });

    return res.status(200).json({
      message: "Update data success",
      data: {
        updated: editSize[0],
      },
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSize = async (req: Request, res: Response) => {
  try {
    if (!req.params.id)
      return res.status(400).json({ message: "Data not found" });

    const dropData = await CarSize.destroy({ where: { id: req.params.id } });

    return res.status(200).json({
      message: "Delete data success",
      data: {
        deleted: dropData,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
