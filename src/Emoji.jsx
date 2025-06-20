import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";   

const emojis = ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','🥰','😗','😙','🥲'];

function Emoji() {
  const [Text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const addEmoji = (emoji) => {
    setText(Text + emoji);
  };

  const handleSend = () => {
    if (Text.trim() !== "") {
      setMessages([...messages, Text]);
      setText("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-200 to-yellow-300 px-4">
      <div className="bg-yellow-400 border-2 border-black rounded-3xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-3xl font-bold text-center text-black mb-6">Emoji Chat Box 💬</h2>

        <div className="relative mb-4">
          <input
            type="text"
            value={Text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-3 pr-12 rounded-xl border-2 border-black text-lg"
          />
          <button
            onClick={handleSend}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
          >
            <IoSend size={20} />
          </button>
        </div>

        <div className="grid grid-cols-6 gap-3 bg-white p-3 rounded-xl border-2 border-black max-h-48 overflow-y-auto">
          {emojis.map((emoji, index) => (
            <button
              key={index}
              onClick={() => addEmoji(emoji)}
              className="text-2xl hover:scale-110 transition-transform duration-150"
            >
              {emoji}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="bg-white text-black px-4 py-2 rounded-xl border border-black shadow-md"
            >
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Emoji;
