import { useEffect, useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'
import { LeaderboardCard } from './components/LeaderboardCard'
import { getDeviceKind, type DeviceKind } from './lib/device'

type Player = {
  id: string
  name: string
  score: number
}

function App() {
  const { width } = useWindowDimensions()
  const deviceKind = getDeviceKind(width)
  const [players, setPlayers] = useState<Player[]>([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string>()

  useEffect(() => {
    let isMounted = true

    async function loadPlayers() {
      try {
        const response = await fetch('/api/players')
        if (!response.ok) {
          throw new Error('Failed to load data')
        }

        const result: { players: Player[] } = await response.json()
        if (isMounted) {
          setPlayers(result.players)
        }
      } catch {
        if (isMounted) {
          setErrorMessage('Unable to load mock API data.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    void loadPlayers()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, containerWidth[deviceKind]]}>
        <Text style={styles.heading}>Golf Leaderboard</Text>
        <Text style={styles.caption}>
          React Native + Vite starter for phone, tablet, and desktop layouts.
        </Text>

        {loading && <Text style={styles.status}>Loading players...</Text>}
        {!loading && errorMessage && (
          <Text style={styles.status}>{errorMessage}</Text>
        )}
        {!loading &&
          !errorMessage &&
          players.map((player) => (
            <LeaderboardCard key={player.id} player={player} />
          ))}
      </View>
    </SafeAreaView>
  )
}

const containerWidth: Record<DeviceKind, { maxWidth: number }> = {
  phone: { maxWidth: 520 },
  tablet: { maxWidth: 760 },
  desktop: { maxWidth: 980 },
}

const styles = StyleSheet.create({
  safeArea: {
    minHeight: '100%',
    backgroundColor: '#f5f7fa',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 32,
    gap: 8,
  },
  heading: {
    fontSize: 34,
    fontWeight: '700',
    color: '#1f2937',
  },
  caption: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    color: '#6b7280',
  },
})

export default App
