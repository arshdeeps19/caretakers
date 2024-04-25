import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';

// Add your API key here from getStream.io
const apiKey = 'wgakytfq8sgr';
const chatClient = StreamChat.getInstance(apiKey);

const ChatComponent = ({ userId, userToken }) => {
  const [channel, setChannel] = useState(null);

  useEffect(() => {
    const initChat = async () => {
      if (!userId || !userToken) {
        console.error('UserId and UserToken are required to initialize chat');
        return;
      }

      try {
        // Connect the user
        await chatClient.connectUser(
          {
            id: userId,
            name: userId, // You can include other user attributes as needed
          },
          userToken
        );

        // Create or join the channel
        const channel = chatClient.channel('messaging', 'care-takers', {
          name: 'CareTakers Chat',
        });

        await channel.watch();
        setChannel(channel);
      } catch (err) {
        console.error('Error initializing chat:', err);
      }
    };

    initChat();

    return () => {
      chatClient.disconnectUser();
    };
  }, [userId, userToken]);

  if (!channel) return <div>Loading...</div>;

  return (
    <Chat client={chatClient} theme="messaging light">
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatComponent;
