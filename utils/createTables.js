import { createUserTable } from "../models/userTable.js";
import { createProductReviewsTable } from "../models/productReviewsTable.js";
import { createShippingInfoTable } from "../models/shippingInfoTable.js";
import { createPaymentsTable } from "../models/paymentsTable.js";
import { createOrdersTable } from "../models/ordersTable.js";
import { createProductsTable } from "../models/productsTable.js";
import { createOrderItemTable } from "../models/orderItemsTable.js";

export const createTables = async () => {
  try {
    await createUserTable();
    await createProductsTable();
    await createProductReviewsTable();
    await createOrdersTable();
    await createOrderItemTable();
    await createShippingInfoTable();
    await createPaymentsTable();
    console.log("All tables created successfully");
  } catch (error) {
    console.error("Failed to create tables:", error);
  }
};
