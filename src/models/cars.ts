import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
  ForeignKey,
} from "sequelize";
import connection from "../../config/dbConnect";
import { car_size as CarSize } from "./carSize";

export class cars extends Model<
  InferAttributes<cars>,
  InferCreationAttributes<cars>
> {
  id!: number;
  size_id!: ForeignKey<number>;
  name!: string;
  rentPerDay!: number;
  img_url!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

cars.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    size_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    rentPerDay: {
      type: DataTypes.INTEGER,
    },
    img_url: {
      type: DataTypes.STRING,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: connection,
  }
);

cars.belongsTo(CarSize, { foreignKey: "size_id" });
