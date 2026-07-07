import { StyleSheet, Text, View } from 'react-native'

type LeaderboardCardProps = {
  player: {
    id: string
    name: string
    score: number
  }
}

export function LeaderboardCard({ player }: LeaderboardCardProps) {
  return (
    <View style={styles.card} testID={`player-${player.id}`}>
      <Text style={styles.playerName}>{player.name}</Text>
      <Text style={styles.score}>{player.score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 8,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dbe1ea',
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playerName: {
    color: '#1f2937',
    fontSize: 18,
    fontWeight: '600',
  },
  score: {
    color: '#0f766e',
    fontSize: 20,
    fontWeight: '700',
  },
})
