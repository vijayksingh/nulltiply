import React from "react";
import { Hidden, Text, View } from "reshaped";
import styles from "./TIL.module.css";

type TILItem = {
  title: string;
  content: string;
  date: string;
};

type TILGroup = {
  year: string;
  month: string;
  items: TILItem[];
};

const tilData: TILGroup[] = [
  {
    year: "2024",
    month: "MAY",
    items: [
      {
        title: "React Server Components",
        content: "Learned about the benefits of RSC for improved performance.",
        date: "May 15, 2024",
      },
      {
        title: "CSS Container Queries",
        content:
          "Explored new responsive design techniques with container queries.",
        date: "May 10, 2024",
      },
    ],
  },
  {
    year: "2024",
    month: "APRIL",
    items: [
      {
        title: "TypeScript Mapped Types",
        content: "Discovered how to create powerful type transformations.",
        date: "April 28, 2024",
      },
      {
        title: "Web Animation API",
        content:
          "Experimented with creating smooth animations using JavaScript.",
        date: "April 20, 2024",
      },
    ],
  },
];

const TIL: React.FC = () => {
  let currentMonth = "";

  return (
    <View className={styles.timeline}>
      {tilData.flatMap((group) => {
        const monthChanged = group.month !== currentMonth;
        currentMonth = group.month;

        return [
          monthChanged && (
            <Text
              key={`${group.year}-${group.month}`}
              variant="featured-2"
              weight="bold"
              className={styles.monthSeparator}
            >
              {group.month.toUpperCase()} {group.year}
            </Text>
          ),
          ...group.items.map((item, index) => (
            <View
              key={`${group.year}-${group.month}-${index}`}
              className={styles.timelineItem}
            >
              {/* date / hide them on mobile */}
              <Hidden hide={{ s: true, m: false, l: false }}>
                <Text
                  variant="body-3"
                  color="neutral-faded"
                  className={styles.date}
                >
                  {item.date.split(" ").slice(0, 2).join("\n")}
                </Text>
              </Hidden>
              <View className={styles.content}>
                <Text variant="featured-3" weight="bold" color="primary">
                  {item.title}
                </Text>
                <Text color="neutral-faded">{item.content}</Text>
              </View>
            </View>
          )),
        ];
      })}
    </View>
  );
};

export default TIL;
