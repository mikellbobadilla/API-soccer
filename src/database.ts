import { Clubs, Match, Matches } from './types'

const clubs: Clubs = require('../data/clubs.json')
const resultados: Matches = require('../data/resultados.json')

export function getClub(code: string): string {
  const club = clubs.clubs.find(club => club.code === code)

  if (!club) {
    throw new Error('No existe este equipo')
  }
  return club.name
}

export function getResultados(eq1: string, eq2: string): Match {
  const match = resultados.matches.find(match => {
    return match.team1 === eq1 && match.team2 === eq2
  })

  if (!match) {
    throw new Error('No existe este partido este año')
  }
  return match
}