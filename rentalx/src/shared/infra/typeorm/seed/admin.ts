import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import { AppDataSource } from "..";

async function create() {
  const id = uuidV4();

  const password = await hash("admin", 8);

  AppDataSource.initialize().then(() => {
    AppDataSource.query(`INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license ) 
    values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXX')
  `);
  });
}

create().then(() => console.log("User admin created!"));
