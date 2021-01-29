import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import api from '../../../services/api'
const options = {
  providers: [
    Providers.GitHub({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
    }),
    Providers.Google({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  callbacks: {
    signIn: async (user, account, profile) => {
      const userData = await api.get(`/users/${profile.id}`).then(response => {
        console.log(response)
      }).catch(async error => {
        console.log(error)
      })
      if (userData === null || userData === undefined) {
        const name = user.name.split(' ', 2)
        await api.post(`/users`, {
          "_id": user.id,
          "name": name[0],
          "surname": name[1]
        }).then(response => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      }
      return Promise.resolve(true)
    },
    session: async (session, user) => {
      const userData = await api.get(`/users/${user.id}`)
      session.user = userData.data
      return Promise.resolve(session)
    }
  }
}
export default (req, res) => NextAuth(req, res, options)
