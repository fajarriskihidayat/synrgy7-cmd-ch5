import { Request, Response } from "express";
import { cars as Cars } from "../models/cars";
import cloudinary from "../../config/cloudinary";
import { UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
import sequelize from "../../config/dbConnect";

export const getCars = async (req: Request, res: Response) => {
  try {
    const cars = await Cars.findAll({
      attributes: {
        include: [[sequelize.col("car_size.size"), "size"]],
        exclude: ["size_id"],
      },
      include: [
        {
          association: "car_size",
          attributes: [],
        },
      ],
    });

    return res.status(200).json({
      message: "Get all cars success",
      data: cars,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCarsById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const cars = await Cars.findOne({
      where: { id: id },
      attributes: {
        include: [[sequelize.col("car_size.size"), "size"]],
        exclude: ["size_id"],
      },
      include: [
        {
          association: "car_size",
          attributes: [],
        },
      ],
    });

    if (!cars) return res.status(404).json({ message: "Data not found" });

    return res.status(200).json({
      message: "Get cars by id success",
      data: cars,
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCar = async (req: Request, res: Response) => {
  const { size_id, name, rentPerDay } = req.body;
  const img_url = req.file as Express.Multer.File;

  if (!size_id || !name || !rentPerDay || !img_url) {
    return res.status(400).json({ message: "Data not null" });
  }

  const filebase64 = img_url.buffer.toString("base64");
  const file = `data:${img_url.mimetype};base64,${filebase64}`;

  try {
    cloudinary.uploader.upload(
      file,
      async (err: UploadApiErrorResponse, result: UploadApiResponse) => {
        if (!!err) {
          return res.status(400).json({ message: "Upload image failed" });
        }

        const addCar = await Cars.create({
          ...req.body,
          img_url: result.url,
        });

        res.status(200).json({
          message: "Created car success",
          data: addCar,
        });
      }
    );
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCar = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { size_id, name, rentPerDay } = req.body;
  const img_url = req.file as Express.Multer.File;

  if (!size_id || !name || !rentPerDay) {
    return res.status(400).json({ message: "Data not null" });
  }

  const filebase64 = img_url?.buffer.toString("base64");
  const file = `data:${img_url?.mimetype};base64,${filebase64}`;

  try {
    cloudinary.uploader.upload(
      file,
      async (err: UploadApiErrorResponse, result: UploadApiResponse) => {
        const editCar = await Cars.update(
          {
            ...req.body,
            img_url: result?.url,
          },
          { where: { id: id } }
        );

        if (editCar[0] === 0)
          return res.status(404).json({ message: "Data not found" });

        res.status(200).json({
          message: "Updated car success",
          data: {
            updated: editCar[0],
          },
        });
      }
    );
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const destroyCar = await Cars.destroy({ where: { id: id } });

    if (destroyCar === 0)
      return res.status(404).json({ message: "Data not found" });

    return res.status(200).json({
      message: "Deleted car success",
      data: {
        deleted: destroyCar,
      },
    });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
