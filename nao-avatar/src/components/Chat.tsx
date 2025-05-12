'use client'

import { useState } from 'react'

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, input])
      setInput('')
    }
  }

  return (
    <div className="absolute bottom-4 left-4 w-1/3 bg-white bg-opacity-80 rounded p-4 shadow">
      <div className="h-40 overflow-y-auto mb-2 text-sm text-black">
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-grow p-2 border rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 rounded-r">
          送信
        </button>
      </div>
    </div>
  )
}
