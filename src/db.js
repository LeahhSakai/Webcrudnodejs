import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "bznbkyebgikav12lcwde-mysql.services.clever-cloud.com",
  user: "ucqe9sgxhqnnurxu",
  password: "zn79ZA7MBExK58Co7APJ",
  port: 3306,
  database: "bznbkyebgikav12lcwde",
});
