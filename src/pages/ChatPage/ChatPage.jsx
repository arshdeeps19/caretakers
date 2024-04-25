import React from 'react';
import ChatComponent from '../../components/Chat/ChatComponent'; 
const ChatPage = () => {
    const userId = 'john';
    const userToken = 'USER_TOKEN';

    return (
      <div>
        <h1>Messages</h1>
        <ChatComponent userId={userId} userToken={userToken} />
      </div>
    );
};

export default ChatPage;
