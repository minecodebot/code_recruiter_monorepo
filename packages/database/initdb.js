print('Start creating databases')

db = db.getSiblingDB('recruiterUser')
print(db.getName())
print(db.getMongo())
db.createUser({
  user: 'api_user',
  pwd: 'api_user_password',
  roles: [{ role: 'readWrite', db: 'recruiterUser' }]
})

// db = db.getSiblingDB('recruiterUser_provider')
// print(db.getName())
// print(db.getMongo())
// db.createUser({
//   user: 'api_user',
//   pwd: 'api_user_password',
//   roles: [{role: 'readWrite', db: 'recruiterUser_provider'}]
// })

print('End of creation of databases')
