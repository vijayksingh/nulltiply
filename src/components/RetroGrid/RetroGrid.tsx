import React, { ReactNode } from "react";
import { View } from "reshaped";
import styles from "./RetroGrid.module.css";

interface RetroGridProps {
  children: ReactNode;
  height?: string | number;
}

const RetroGrid: React.FC<RetroGridProps> = ({
  children,
  height = "100dvh",
}) => {
  return (
    <View position="relative" height={height} width="100%" overflow="hidden">
      <View
        className={styles.retroGrid}
        position="absolute"
        inset={0}
        overflow="hidden"
      >
        <View className={styles.gridContainer}>
          <View className={styles.grid} />
        </View>
        <View className={styles.backgroundGradient} />
      </View>
      <View
        paddingBottom={6}
        position="absolute"
        inset={0}
        align="center"
        justify="center"
      >
        {children}
      </View>
    </View>
  );
};

export default RetroGrid;
