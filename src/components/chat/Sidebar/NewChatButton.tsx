'use client'

import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'
import useChatActions from '@/hooks/useChatActions'
import { useStore } from '@/store'

function NewChatButton() {
  const { clearChat } = useChatActions()
  const { messages } = useStore()
  return (
    <Button
      className="bg-brand hover:bg-brand/80 z-10 cursor-pointer rounded px-4 py-2 font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
      onClick={clearChat}
      disabled={messages.length === 0}
    >
      <div className="flex items-center gap-2">
        <p>New Chat</p>{' '}
        <Icon type="plus-icon" size="xs" className="text-white" />
      </div>
    </Button>
  )
}

export default NewChatButton
