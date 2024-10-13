'use client'

import ConversationFallback from "@/app/components/shared/conversation/ConversationFallback";
import ItemsList from "@/app/components/shared/list-item/ItemsList";
import Request from "./_components/Request";
import React from "react";
import AddFriendDialog from "./_components/AddFriendDialog";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";

type Props = {};

const Friends = (props: Props) => {
  const requests = useQuery(api.requests.get);
  return (
    <>
      <ItemsList title="Friend" action={<AddFriendDialog />}>
        {requests ? (
          requests.length === 0 ? (
            <p className="w-full h-full flex items-center justify-center">
              No friend request found
            </p>
          ) : (
            requests.map((request) => {
              return (
                <Request
                  key={request.request._id}
                  id={request.request._id}
                  imageUrl={request.sender.imageUrl}
                  username={request.sender.username}
                  email={request.sender.email}
                />
              );
            })
          )
        ) : (
          <Loader2 className="h-8 w-8" />
        )}
      </ItemsList>
      <ConversationFallback />
    </>
  );
};

export default Friends;
