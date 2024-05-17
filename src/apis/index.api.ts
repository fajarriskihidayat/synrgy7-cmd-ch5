import { Request, Response } from "express";

const index = (req: Request, res: Response) => {
  fetch("http://localhost:8000/api/cars")
    .then((res) => res.json())
    .then((data) => res.render("../views/index.ejs", { cars: data.data }));
};

module.exports = index;
