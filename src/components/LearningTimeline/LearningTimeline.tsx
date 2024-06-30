import React from "react";
import { Card, Text, View } from "reshaped";
import YearSeparator from "../YearSeparator/YearSeparator";
import styles from "./LearningTimeline.module.css";

type LearningItem = {
  title: string;
  author: string;
  date: string;
};

type TimelineGroup = {
  year: string;
  month: string;
  items: LearningItem[];
};
const learningData: TimelineGroup[] = [
  {
    year: "2024",
    month: "MAY",
    items: [
      { title: "Learning Go", author: "Jon Bodner", date: "May 2024" },
      {
        title: "The Engineering Executive's Primer",
        author: "Will Larson",
        date: "May 2024",
      },
    ],
  },
  {
    year: "2024",
    month: "JUNE",
    items: [
      { title: "Clean Code", author: "Robert C. Martin", date: "June 2024" },
      {
        title: "Refactoring",
        author: "Martin Fowler",
        date: "June 2024",
      },
    ],
  },
  {
    year: "2024",
    month: "JULY",
    items: [
      { title: "You Don't Know JS", author: "Kyle Simpson", date: "July 2024" },
      {
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        date: "July 2024",
      },
    ],
  },
  {
    year: "2024",
    month: "AUGUST",
    items: [
      { title: "Design Patterns", author: "Erich Gamma", date: "August 2024" },
      {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        date: "August 2024",
      },
    ],
  },
  {
    year: "2024",
    month: "SEPTEMBER",
    items: [
      {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        date: "September 2024",
      },
      {
        title: "Structure and Interpretation of Computer Programs",
        author: "Harold Abelson",
        date: "September 2024",
      },
    ],
  },
  {
    year: "2023",
    month: "MAY",
    items: [
      { title: "Learning Go", author: "Jon Bodner", date: "May 2024" },
      {
        title: "The Engineering Executive's Primer",
        author: "Will Larson",
        date: "May 2024",
      },
    ],
  },
];

const LearningTimeline: React.FC = () => {
  let currentYear = "";

  return (
    <View gap={8}>
      {learningData.map((group, index) => {
        const yearChanged = group.year !== currentYear;
        currentYear = group.year;

        return (
          <React.Fragment key={index}>
            {yearChanged && <YearSeparator year={group.year} />}
            <Card className={styles.learningCard}>
              <View padding={4} gap={4}>
                <Text variant="featured-3" weight="bold">
                  {group.month}
                </Text>
                <View gap={2}>
                  {group.items.map((item, itemIndex) => (
                    <View key={itemIndex} direction="row" gap={2}>
                      <Text color="primary" weight="bold">
                        {item.title}
                      </Text>
                      <Text color="neutral-faded">·</Text>
                      <Text color="neutral-faded">{item.author}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </Card>
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default LearningTimeline;
