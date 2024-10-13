"use client";

import { Card } from "@/components/ui/card";
import { useConversation } from "@/hooks/useCoversation";
import { cn } from "@/lib/utils";
import React from "react";

type Props = React.PropsWithChildren<{
  title: string;
  action?: React.ReactNode;
}>;

const ItemsList = ({ children, title, action: Action }: Props) => {
  const { isActive, conversationId } = useConversation();
  return (
    <Card
      className={cn("hidden h-full w-full lg:flex-none lg:w-80 p2", {
        "lg:block": isActive,
        "block" : !isActive
      })}
    >
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight m-2">{title}</h1>
        {Action ? Action : null}
      </div>
      <div className="w-full h-full flex flex-col items-center gap-2">
        {children}
      </div>
    </Card>
  );
};

export default ItemsList;
