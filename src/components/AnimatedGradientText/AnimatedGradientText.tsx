import React, { ReactNode } from "react";
import { View } from "reshaped";
import styles from "./AnimatedGradientText.module.css";

interface AnimatedGradientTextProps {
  children: ReactNode;
  withShadow?: boolean;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  children,
  withShadow = false,
}) => {
  return (
    <View
      className={`${styles.container} ${withShadow ? styles.textShadow : ""}`}
      data-text={typeof children === "string" ? children : undefined}
    >
      {children}
    </View>
  );
};

export default AnimatedGradientText;
