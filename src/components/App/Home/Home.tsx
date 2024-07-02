import { Text, View } from "reshaped";
import AnimatedGradientText from "../../AnimatedGradientText/AnimatedGradientText";
import RetroGrid from "../../RetroGrid/RetroGrid";

const HomePage = () => {
  return (
    <View height="100dvh" width="100%" overflow="hidden" position="relative">
      <RetroGrid height="25%">
        <AnimatedGradientText withShadow>
          <Text variant="title-3" weight="bold" align="center">
            dprophecyguy
          </Text>
        </AnimatedGradientText>
      </RetroGrid>
    </View>
  );
};

export default HomePage;
