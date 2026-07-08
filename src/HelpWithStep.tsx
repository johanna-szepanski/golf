import { HELP_TOPICS, type Coach, type HelpTopic } from "./types";
import { ScaledText } from "./lib/typography";
import {
  TextInput,
  Pressable,
  View,
  StyleSheet,
  Image,
  Modal
} from "react-native";
import { useState } from "react";

const pickerStyles = StyleSheet.create({
  trigger: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0f2234",
    borderWidth: 1,
    borderColor: "#4a6a8a",
    borderRadius: 8,
    paddingHorizontal: 14,
    minHeight: 44
  },
  triggerOpen: {
    borderColor: "#a8d4f5"
  },
  triggerText: {
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "Cormorant Garamond"
  },
  placeholder: {
    color: "#4a6a8a"
  },
  caret: {
    color: "#7a9cbc",
    fontSize: 11
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24
  },
  list: {
    backgroundColor: "#0f2234",
    borderRadius: 12,
    width: "100%",
    maxWidth: 400,
    overflow: "hidden",
    paddingBottom: 8
  },
  listTitle: {
    color: "#a0bcd8",
    fontSize: 13,
    fontFamily: "Cormorant Garamond",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#1a3a5c",
    marginBottom: 4
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    minHeight: 44
  },
  optionSelected: {
    backgroundColor: "rgba(168, 212, 245, 0.1)"
  },
  optionText: {
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "Cormorant Garamond"
  },
  optionTextSelected: {
    color: "#a8d4f5"
  },
  checkmark: {
    color: "#a8d4f5",
    fontSize: 16
  }
});
const bannerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0f2234",
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 8,
    borderRadius: 12,
    padding: 12,
    gap: 12,
    borderWidth: 2,
    borderColor: "#a8d4f5"
  },
  photo: {
    width: 36,
    height: 36,
    borderRadius: 18
  },
  name: {
    flex: 1,
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond"
  },
  changeBtn: {
    borderWidth: 1,
    borderColor: "#7a9cbc",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 14,
    minHeight: 44,
    justifyContent: "center",
    alignItems: "center"
  },
  changeBtnText: {
    color: "#a8d4f5",
    fontSize: 13,
    fontFamily: "Cormorant Garamond"
  }
});

const helpStyles = StyleSheet.create({
  container: {
    paddingTop: 4
  },
  field: {
    marginHorizontal: 16,
    marginTop: 20,
    gap: 8
  },
  label: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond"
  },
  textInput: {
    backgroundColor: "#0f2234",
    borderWidth: 1,
    borderColor: "#4a6a8a",
    borderRadius: 8,
    padding: 14,
    color: "#ffffff",
    fontSize: 15,
    fontFamily: "Cormorant Garamond",
    minHeight: 110
  },
  nextBtn: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    minHeight: 52,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8
  },
  nextBtnDisabled: {
    backgroundColor: "#2a4a6a"
  },
  nextBtnText: {
    color: "#1a3a5c",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Cormorant Garamond"
  },
  nextBtnTextDisabled: {
    color: "#4a6a8a"
  }
});

function TopicPicker({
  value,
  onChange
}: {
  value: HelpTopic | null;
  onChange: (topic: HelpTopic) => void;
}) {
  const [open, setOpen] = useState(false);
  const label = value ?? "Välj område";

  return (
    <View>
      <Pressable
        style={[pickerStyles.trigger, open && pickerStyles.triggerOpen]}
        onPress={() => setOpen(true)}
        accessibilityRole="combobox"
        accessibilityLabel="Välj vad du behöver hjälp med"
        accessibilityState={{ expanded: open }}
        accessibilityHint="Öppnar en lista med alternativ"
      >
        <ScaledText
          style={[pickerStyles.triggerText, !value && pickerStyles.placeholder]}
        >
          {label}
        </ScaledText>
        <ScaledText
          style={pickerStyles.caret}
          accessible={false}
        >
          {open ? "▲" : "▼"}
        </ScaledText>
      </Pressable>
      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
        accessibilityViewIsModal={true}
      >
        <Pressable
          style={pickerStyles.backdrop}
          onPress={() => setOpen(false)}
          accessibilityRole="button"
          accessibilityLabel="Stäng listan"
        >
          <View
            style={pickerStyles.list}
            accessibilityRole="menu"
            accessibilityLabel="Välj vad du behöver hjälp med"
          >
            <ScaledText
              style={pickerStyles.listTitle}
              accessibilityRole="header"
            >
              Vad vill du ha hjälp med?
            </ScaledText>
            {HELP_TOPICS.map((topic) => (
              <Pressable
                key={topic}
                style={[
                  pickerStyles.option,
                  value === topic && pickerStyles.optionSelected
                ]}
                onPress={() => {
                  onChange(topic);
                  setOpen(false);
                }}
                accessibilityRole="menuitem"
                accessibilityState={{ selected: value === topic }}
                accessibilityLabel={topic}
              >
                <ScaledText
                  style={[
                    pickerStyles.optionText,
                    value === topic && pickerStyles.optionTextSelected
                  ]}
                >
                  {topic}
                </ScaledText>
                {value === topic && (
                  <ScaledText
                    style={pickerStyles.checkmark}
                    accessible={false}
                  >
                    ✓
                  </ScaledText>
                )}
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
function SelectedCoachBanner({
  coach,
  onChangeCoach
}: {
  coach: Coach;
  onChangeCoach: () => void;
}) {
  return (
    <View
      style={bannerStyles.container}
      accessible={true}
      accessibilityLabel={`Vald coach: ${coach.name}`}
    >
      <Image
        source={{ uri: coach.photo }}
        style={bannerStyles.photo}
        accessibilityLabel={`Porträtt av ${coach.name}`}
        accessibilityRole="image"
      />
      <ScaledText style={bannerStyles.name}>{coach.name}</ScaledText>
      <Pressable
        style={bannerStyles.changeBtn}
        onPress={onChangeCoach}
        accessibilityRole="button"
        accessibilityLabel="Byt coach"
      >
        <ScaledText style={bannerStyles.changeBtnText}>Byt</ScaledText>
      </Pressable>
    </View>
  );
}

export function HelpWithStep({
  coach,
  topic,
  description,
  onTopicChange,
  onDescriptionChange,
  onChangeCoach,
  onNext
}: {
  coach: Coach;
  topic: HelpTopic | null;
  description: string;
  onTopicChange: (t: HelpTopic) => void;
  onDescriptionChange: (s: string) => void;
  onChangeCoach: () => void;
  onNext: () => void;
}) {
  return (
    <View style={helpStyles.container}>
      <SelectedCoachBanner
        coach={coach}
        onChangeCoach={onChangeCoach}
      />
      <View style={helpStyles.field}>
        <ScaledText
          style={helpStyles.label}
          accessibilityRole="none"
          nativeID="topic-label"
        >
          Vad behöver du hjälp med? *
        </ScaledText>
        <TopicPicker
          value={topic}
          onChange={onTopicChange}
        />
      </View>
      <View style={helpStyles.field}>
        <ScaledText
          style={helpStyles.label}
          accessibilityRole="none"
          nativeID="desc-label"
        >
          Berätta mer (valfritt)
        </ScaledText>
        <TextInput
          style={helpStyles.textInput}
          multiline
          numberOfLines={4}
          placeholder="Beskriv gärna din situation mer detaljerat..."
          placeholderTextColor="#4a6a8a"
          value={description}
          onChangeText={onDescriptionChange}
          accessibilityLabel="Berätta mer om vad du behöver hjälp med"
          accessibilityHint="Valfritt fritextfält"
          textAlignVertical="top"
        />
      </View>
      <View style={helpStyles.field}>
        <Pressable
          style={[helpStyles.nextBtn, !topic && helpStyles.nextBtnDisabled]}
          onPress={onNext}
          disabled={!topic}
          accessibilityRole="button"
          accessibilityLabel="Gå vidare till betalning"
          accessibilityState={{ disabled: !topic }}
          accessibilityHint={!topic ? "Välj ett område först" : undefined}
        >
          <ScaledText
            style={[
              helpStyles.nextBtnText,
              !topic && helpStyles.nextBtnTextDisabled
            ]}
          >
            Gå vidare till betalning
          </ScaledText>
        </Pressable>
      </View>
    </View>
  );
}
