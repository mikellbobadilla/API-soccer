import express from 'express'
import { getClub, getResultados } from './database'
import { Match } from './types'

export default function createServer() {
  const app = express()

  app.get('/resultados/:equipo1/:equipo2', (req, res) => {
    try {
      let team1 = getClub(req.params.equipo1)
      let team2 = getClub(req.params.equipo2)

      let match: Match = getResultados(team1, team2)

      if (match.score) {
        return res.status(200).json({
          date: match.date,
          score: `[ ${team1} ${match.score.ft[0]} -- ${match.score.ft[1]} ${team2} ]`
        })
      }
      return res.json({
        date: match.date,
      })

    } catch (e: any) {
      return res.status(400).json({
        error: e.message
      })
    }
  })

  return app
}