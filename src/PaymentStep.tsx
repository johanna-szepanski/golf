import { View, Image, Pressable, StyleSheet } from "react-native";
import type { Coach, HelpTopic } from "./types";
import { ScaledText } from "./lib/typography";

const paymentStyles = StyleSheet.create({
  container: {
    paddingTop: 4,
    paddingBottom: 32
  },
  heading: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond",
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8
  },
  summaryCard: {
    backgroundColor: "#0f2234",
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    gap: 12
  },
  coachRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12
  },
  photo: {
    width: 48,
    height: 48,
    borderRadius: 24
  },
  coachName: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond"
  },
  coachSpeciality: {
    color: "#a0bcd8",
    fontSize: 13,
    fontFamily: "Cormorant Garamond"
  },
  divider: {
    height: 1,
    backgroundColor: "#1a3a5c"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  rowLabel: {
    color: "#7a9cbc",
    fontSize: 14,
    fontFamily: "Cormorant Garamond"
  },
  rowValue: {
    color: "#ffffff",
    fontSize: 14,
    fontFamily: "Cormorant Garamond",
    textAlign: "right",
    flex: 1,
    paddingLeft: 16
  },
  descRow: {
    gap: 4
  },
  descValue: {
    color: "#a0bcd8",
    fontSize: 13,
    fontFamily: "Cormorant Garamond",
    lineHeight: 20
  },
  priceRow: {
    borderTopWidth: 1,
    borderTopColor: "#1a3a5c",
    paddingTop: 12,
    marginTop: 4
  },
  priceLabel: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond"
  },
  priceValue: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond"
  },
  payBtn: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    minHeight: 52,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    marginTop: 20
  },
  payBtnText: {
    color: "#1a3a5c",
    fontSize: 17,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond"
  },
  backBtn: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    marginTop: 8
  },
  backBtnText: {
    color: "#a0bcd8",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond"
  }
});

export const PaymentStep = ({
  coach,
  topic,
  description,
  onPay,
  onBack
}: {
  coach: Coach;
  topic: HelpTopic;
  description: string;
  onPay: () => void;
  onBack: () => void;
}) => (
  <View style={paymentStyles.container}>
    <ScaledText
      style={paymentStyles.heading}
      accessibilityRole="header"
    >
      Sammanfattning
    </ScaledText>

    <View
      style={paymentStyles.summaryCard}
      accessible={true}
      accessibilityLabel={[
        `Coach: ${coach.name}`,
        `Område: ${topic}`,
        description ? `Beskrivning: ${description}` : null,
        `Leveranstid: ${coach.deliveryTime}`,
        `Pris: ${coach.price} kronor`
      ]
        .filter(Boolean)
        .join(". ")}
    >
      <View style={paymentStyles.coachRow}>
        <Image
          source={{ uri: coach.photo }}
          style={paymentStyles.photo}
          accessibilityLabel={`Porträtt av ${coach.name}`}
          accessibilityRole="image"
        />
        <View>
          <ScaledText style={paymentStyles.coachName}>{coach.name}</ScaledText>
          <ScaledText style={paymentStyles.coachSpeciality}>
            {coach.speciality}
          </ScaledText>
        </View>
      </View>

      <View
        style={paymentStyles.divider}
        accessible={false}
      />

      <View style={paymentStyles.row}>
        <ScaledText style={paymentStyles.rowLabel}>Område</ScaledText>
        <ScaledText style={paymentStyles.rowValue}>{topic}</ScaledText>
      </View>

      {description ? (
        <View style={paymentStyles.descRow}>
          <ScaledText style={paymentStyles.rowLabel}>Beskrivning</ScaledText>
          <ScaledText style={paymentStyles.descValue}>{description}</ScaledText>
        </View>
      ) : null}

      <View style={paymentStyles.row}>
        <ScaledText style={paymentStyles.rowLabel}>Leveranstid</ScaledText>
        <ScaledText style={paymentStyles.rowValue}>
          {coach.deliveryTime}
        </ScaledText>
      </View>

      <View style={[paymentStyles.row, paymentStyles.priceRow]}>
        <ScaledText style={paymentStyles.priceLabel}>Totalt</ScaledText>
        <ScaledText style={paymentStyles.priceValue}>
          {coach.price} kr
        </ScaledText>
      </View>
    </View>

    <Pressable
      style={paymentStyles.payBtn}
      onPress={onPay}
      accessibilityRole="button"
      accessibilityLabel={`Betala ${coach.price} kronor`}
    >
      <ScaledText style={paymentStyles.payBtnText}>Betala</ScaledText>
    </Pressable>

    <Pressable
      style={paymentStyles.backBtn}
      onPress={onBack}
      accessibilityRole="button"
      accessibilityLabel="Tillbaka"
    >
      <ScaledText style={paymentStyles.backBtnText}>Tillbaka</ScaledText>
    </Pressable>
  </View>
);
