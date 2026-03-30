# Assessment-Frontend

# Products CLI (TypeScript + PostgreSQL)

Minimal CLI tool for managing products using TypeScript, Sequelize, and PostgreSQL.

---

## Features

- List all products
- Add a product
- Get product by ID
- Update a product
- Delete a product

Built with:

- **TypeScript**
- **Sequelize ORM**
- **PostgreSQL**
- **Commander CLI**
- **dotenv** for environment variables

---

## Project Structure
products-cli/
│── .env
│── package.json
│── tsconfig.json
│── src/
│ │── config/
│ │ └── database.ts
│ │── models/
│ │ └── product.ts
│ │── commands/
│ │ └── productCommands.ts
│ └── index.ts


---

## Setup

1. Clone the repository:

```bash
git clone <https://github.com/miqdadboom/Assessment-Frontend.git>
cd products-cli
```

2. Install dependencies:
npm install

3. Create .env file in the root:
DB_PASSWORD=1234

4. Compile and run:
npx tsx src/index.ts <command>

CLI Commands
Command	Description
- list	List all products
- add <name> <price> [description]	Add a new product
- get <id>	Get product by ID
- update <id> <name> <price> [description]	Update product
- delete <id>	Delete product by ID


By Miqdad Boom :)

