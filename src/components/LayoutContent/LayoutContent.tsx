"use client";

import { ReactNode } from "react";
import { Hidden, ScrollArea, View } from "reshaped";
import useArticleNavigation from "../../hooks/useArticleNavigation";
import type { SubmenuItemsMap } from "../../types";

type Props = {
  children: ReactNode;
  availableRoutes: SubmenuItemsMap;
};

const LayoutContent = (props: Props) => {
  const { children, availableRoutes } = props;
  const { isArticle, pathname } = useArticleNavigation(availableRoutes);

  return (
    <Hidden hide={{ s: false, l: false }}>
      {(className) => (
        <View grow className={className} height="100dvh">
          <ScrollArea scrollbarDisplay="hover" key={pathname}>
            {children}
          </ScrollArea>
        </View>
      )}
    </Hidden>
  );
};

export default LayoutContent;
