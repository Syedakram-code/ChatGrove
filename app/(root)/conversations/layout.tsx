import ItemsList from '@/app/components/shared/list-item/ItemsList'
import React from 'react'

type Props = React.PropsWithChildren<{}>

const ConversationsLayout = ({children}: Props) => {
  return (
    <>
    <ItemsList title='Conversations'>Conversation Page</ItemsList>
    {children}
    </>
  )
}

export default ConversationsLayout