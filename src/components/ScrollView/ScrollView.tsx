import React, { useEffect, useRef } from "react";
import { View, ViewProps } from "reshaped";

interface ScrollViewProps extends ViewProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "horizontal" | "vertical";
}

const ScrollView: React.FC<ScrollViewProps> = ({
  children,
  speed = 1,
  direction = "vertical",
  ...props
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (direction !== "horizontal") return; // Only apply auto-scroll for horizontal direction

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += speed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [speed, direction]);

  const isHorizontal = direction === "horizontal";

  return (
    <View
      as="div"
      ref={scrollRef}
      overflow={isHorizontal ? "hidden" : "auto"}
      width="100%"
      css={{
        whiteSpace: isHorizontal ? "nowrap" : "normal",
        overflowX: isHorizontal ? "hidden" : "auto",
        overflowY: isHorizontal ? "hidden" : "auto",
      }}
      {...props}
    >
      <View
        direction={isHorizontal ? "row" : "column"}
        gap={4}
        css={{ display: isHorizontal ? "inline-flex" : "flex" }}
      >
        {children}
        {isHorizontal && children}{" "}
        {/* Duplicate children only for horizontal scrolling */}
      </View>
    </View>
  );
};

export default ScrollView;
