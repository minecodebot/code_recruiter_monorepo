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
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  callbacks: {
    signIn: async (profile: { email: string; name: string }) => {
      await api
        .get(`/users/${profile.email}`)
        .then(async response => {
          console.log(response)
          if (response.data === null) {
            const name = profile.name.split(' ', 2)
            await api
              .post('/users', {
                name: name[0],
                surname: name[1],
                email: profile.email
              })
              .then(response2 => {
                console.log(response2)
              })
              .catch(error2 => {
                console.log(error2)
              })
          }
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
      return Promise.resolve(true)
    },
    session: async (session: { user: string }, user: { email: string }) => {
      await api
        .get(`/users/${user.email}`)
        .then(response => {
          if (response.data !== null) {
            session.user = response.data
          }
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })

      return Promise.resolve(session)
    }
  }
}
export default (req: any, res: any) => NextAuth(req, res, options)
