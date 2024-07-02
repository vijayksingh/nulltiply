import { Image, Text, View } from "reshaped";
import profile from "../../../assets/images/profile.png";
import AnimatedGradientText from "../../AnimatedGradientText/AnimatedGradientText";
import RetroGrid from "../../RetroGrid/RetroGrid";

const HomePage = () => {
  return (
    <View height="100dvh" width="100%" overflow="hidden" position="relative">
      <RetroGrid height="15%">
        <AnimatedGradientText withShadow>
          <Text variant="title-2" weight="bold" align="center">
            dprophecyguy
          </Text>
        </AnimatedGradientText>
      </RetroGrid>

      <View direction="row" align="center">
        <View width={{ s: "100%", m: "60%" }} gap={6}>
          <View direction="column" gap={4}>
            <Text variant="title-3" color="primary">
              About Me
            </Text>
            <View gap={4}>
              <Text variant="body-1">
                Hello! I'm a passionate developer with a love for creating
                innovative solutions. With expertise in various technologies, I
                strive to build efficient and user-friendly applications.
              </Text>
              <Text variant="body-1">
                My journey in tech has been exciting, and I'm always eager to
                learn and explore new technologies.
              </Text>
            </View>
          </View>
        </View>
        <View
          width={{ s: "80%", m: "40%" }}
          maxWidth="300px"
          align="center"
          justify="center"
          padding={6}
        >
          <Image
            src={profile.src}
            alt="Profile picture"
            width="100%"
            borderRadius="large"
          />
        </View>
      </View>
    </View>
  );
};

export default HomePage;
