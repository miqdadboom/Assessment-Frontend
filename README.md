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
products-cli/
│── .env
│── package.json
│── tsconfig.json
│── src/
│   │── config/
│   │   └── database.ts
│   │── models/
│   │   └── product.ts
│   │── commands/
│   │   └── productCommands.ts
│   └── index.ts


Setup
Clone the repository:
git clone https://github.com/miqdadboom/Assessment-Frontend.git
cd products-cli

Install dependencies:
npm install

Create .env file in the root:
DB_PASSWORD=1234

Replace DB_PASSWORD with your PostgreSQL password.
Compile and run:
npx tsx src/index.ts <command>


CLI Commands
Command
Description
list
List all products
add <name> <price> [description]
Add a new product
get <id>
Get product by ID
update <id> <name> <price> [description]
Update product
delete <id>
Delete product by ID

Examples
# List all products
npx tsx src/index.ts list

# Add a product
npx tsx src/index.ts add "Laptop" 12.99 "High-end laptop"

# Get product by ID
npx tsx src/index.ts get 1

# Update product
npx tsx src/index.ts update 1 "Laptop Pro" 15.99 "Updated description"

# Delete product
npx tsx src/index.ts delete 1


Notes
Ensure PostgreSQL server is running.
.env should never be pushed to a public repository.
The database table products is created automatically when running the CLI for the first time.

Author
By Miqdad Boom :)

