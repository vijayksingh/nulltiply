import React from "react";
import { Text, View } from "reshaped";

type Props = {
  year: string;
};

const YearSeparator: React.FC<Props> = ({ year }) => {
  return (
    <View align="center" padding={4}>
      <Text variant="featured-2" weight="bold">
        {year}
      </Text>
    </View>
  );
};

export default YearSeparator;
