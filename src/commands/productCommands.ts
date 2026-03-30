import { Command } from "commander";
import { Product } from "../models/product";

export const program = new Command();

// ===== LIST =====
program
  .command("list")
  .description("List all products")
  .action(async () => {
    const products = await Product.findAll();
    console.table(products.map(p => p.toJSON()));
  });

// ===== ADD =====
program
  .command("add <name> <price> [description]")
  .description("Add a new product")
  .action(async (name: string, price: string, description?: string) => {
    const product = await Product.create({
      name,
      price: parseFloat(price),
      description,
    });
    console.log("✅ Product added:", product.toJSON());
  });

// ===== GET =====
program
  .command("get <id>")
  .description("Get product by ID")
  .action(async (id: string) => {
    const product = await Product.findByPk(parseInt(id));
    if (!product) return console.log("❌ Product not found");
    console.log(product.toJSON());
  });

// ===== UPDATE =====
program
  .command("update <id> <name> <price> [description]")
  .description("Update a product by ID")
  .action(async (id: string, name: string, price: string, description?: string) => {
    const product = await Product.findByPk(parseInt(id));
    if (!product) return console.log("❌ Product not found");

    await product.update({
      name,
      price: parseFloat(price),
      description,
    });
    console.log("✅ Product updated:", product.toJSON());
  });

// ===== DELETE =====
program
  .command("delete <id>")
  .description("Delete a product by ID")
  .action(async (id: string) => {
    const product = await Product.findByPk(parseInt(id));
    if (!product) return console.log("❌ Product not found");

    await product.destroy();
    console.log("✅ Product deleted");
  });