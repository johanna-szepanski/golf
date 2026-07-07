import { http, HttpResponse } from 'msw'
import { mockPlayers } from './data'

export const handlers = [
  http.get('/api/players', () => {
    return HttpResponse.json({ players: mockPlayers })
  }),
]
