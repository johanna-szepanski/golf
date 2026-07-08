import { View, StyleSheet } from "react-native";
import { ScaledText } from "./lib/typography";
import { type DeviceKind } from './lib/device'

const STEPS = ['Select coach', 'I want help with', 'Payment', 'Start session'];


const stepperStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    width: '100%',
    flexWrap: 'wrap',
    gap: 8,
  },
  step: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#4a6a8a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleActive: {
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
  },
  circleText: {
    color: '#4a6a8a',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Cormorant Garamond',
  },
  circleTextActive: {
    color: '#1a3a5c',
  },
  label: {
    color: '#4a6a8a',
    fontSize: 14,
    fontFamily: 'Cormorant Garamond',
  },
  labelActive: {
    color: '#ffffff',
  },
  line: {
    width: 24,
    height: 1.5,
    backgroundColor: '#4a6a8a',
    marginHorizontal: 4,
  },
  lineDone: {
    backgroundColor: '#ffffff',
  },
  currentStepTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Cormorant Garamond',
    textAlign: 'center',
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
})

export const Stepper = ({ current, deviceKind }: { current: number; deviceKind: DeviceKind }) => {
  const showLabels = deviceKind !== 'phone'
  return (
    <View
      accessible={true}
      accessibilityRole="progressbar"
      accessibilityLabel={`Step ${current + 1} of ${STEPS.length}: ${STEPS[current]}`}
      accessibilityValue={{ min: 1, max: STEPS.length, now: current + 1 }}
    >
      <View style={stepperStyles.container}>
        {STEPS.map((label, index) => {
          const active = index === current
          const done = index < current
          return (
            <View key={label} style={stepperStyles.step}>
              <View style={[stepperStyles.circle, (active || done) && stepperStyles.circleActive]}>
                <ScaledText style={[stepperStyles.circleText, (active || done) && stepperStyles.circleTextActive]}>
                  {index + 1}
                </ScaledText>
              </View>
              {showLabels && (
                <ScaledText style={[stepperStyles.label, active && stepperStyles.labelActive]}>{label}</ScaledText>
              )}
              {index < STEPS.length - 1 && <View style={[stepperStyles.line, done && stepperStyles.lineDone]} />}
            </View>
          )
        })}
      </View>
      {!showLabels && (
        <ScaledText style={stepperStyles.currentStepTitle}>{STEPS[current]}</ScaledText>
      )}
    </View>
  )
};
