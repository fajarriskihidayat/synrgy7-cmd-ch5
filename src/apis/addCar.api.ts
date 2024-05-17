import { Request, Response } from "express";

const addCar = (req: Request, res: Response) => {
  fetch("http://localhost:8000/api/sizes")
    .then((res) => res.json())
    .then((data) => res.render("../views/addCar.ejs", { sizes: data.data }));
};

module.exports = addCar;
