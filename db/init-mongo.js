const db = db.getSiblingDB('exampleDB');
db.createUser(
  {
    user: 'root',
    pwd: 'example',
    roles: [{ role: 'readWrite', db: 'exampleDB' }],
  },
);
db.createCollection('users');
db.users.insert([
  {
     name: 'Jon',
     email: 'j@gmail.com',
     pwd: '1234',
   } 
 ]);


db.createCollection('Example');
