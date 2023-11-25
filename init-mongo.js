const db = db.getSiblingDB('exampleDB');

db.createCollection('users');
db.users.insert([
  {
     name: 'Jon',
     email: 'jon@gmail.com',
     pwd: '1234',
   } 
 ]);


db.createCollection('banks');
