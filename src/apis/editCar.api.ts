import { Request, Response } from "express";

const editCar = (req: Request, res: Response) => {
  fetch(`http://localhost:8000/api/cars/${req.params.id}`)
    .then((res) => res.json())
    .then((dataCar) =>
      fetch("http://localhost:8000/api/sizes")
        .then((res) => res.json())
        .then((dataSizes) =>
          res.render("../views/editCar.ejs", {
            car: dataCar.data,
            sizes: dataSizes.data,
          })
        )
    );
};

module.exports = editCar;
