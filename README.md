Assessment-Frontend
Products CLI (TypeScript + PostgreSQL)
Minimal CLI tool for managing products using TypeScript, Sequelize, and PostgreSQL.

Features
List all products
Add a product
Get product by ID
Update a product
Delete a product
Built with:

TypeScript
Sequelize ORM
PostgreSQL
Commander CLI
dotenv for environment variables
Project Structure
products-cli/ │── .env │── package.json │── tsconfig.json │── src/ │ │── config/ │ │ └── database.ts │ │── models/ │ │ └── product.ts │ │── commands/ │ │ └── productCommands.ts │ └── index.ts

Setup
Clone the repository:
git clone <https://github.com/miqdadboom/Assessment-Frontend.git>
cd products-cli
Install dependencies: npm install

Create .env file in the root: DB_PASSWORD=1234

Compile and run: npx tsx src/index.ts

CLI Commands Command Description

list List all products
add [description] Add a new product
get Get product by ID
update [description] Update product
delete Delete product by ID
By Miqdad Boom :)
