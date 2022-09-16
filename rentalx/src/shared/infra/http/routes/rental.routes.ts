import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();

rentalRoutes.post("/", ensureAuthenticated, createRentalController.handle);

// rentalRoutes.post(
//   "/devolution/:id",
//   ensureAuthenticated,
//   devolutionRentalController.handle
// );

// rentalRoutes.get(
//   "/user",
//   ensureAuthenticated,
//   listRentalsByUserController.handle
// );

export { rentalRoutes };
