import { getConnection } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { hash } from 'bcrypt';
import createConnection from '../index'

async function create() {
    const connection = await createConnection();

    const id = uuidV4();
    const password = await hash("admin", 7);
    // const today = new Date().getDate();

    await connection.query(
        `INSERT INTO USERS (id, name, email, password, isAdmin, created_at)
            values('${id}', 'admin', 'admin@cec.com.br', '${password}', '1', NOW())
        `
    );

    await connection.close;

}
create().then(() => console.log("User admin created!"));