import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_MESSAGES, NEW_MESSAGE } from '../../apollo/queries';
import { messageActionCreator } from '../../store/action';
import { AppDispatch, useAppSelector } from '../../store/store';
import Message from './Message/Message';
import './style.scss'

const MessageList: React.FC = () => {

  const dispatch = useDispatch() as AppDispatch
  dispatch(messageActionCreator.getMessages())

  const messages = useAppSelector(state => state.message.messageList)

  const { loading, error, data, subscribeToMore } = useQuery(GET_MESSAGES);

  useEffect(() => {

    subscribeToMore({
      document: NEW_MESSAGE,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) {
          return prev;
        }

        const { newMessage } = subscriptionData.data;
        return {
          ...prev,
          newMessage
        };
      },
    });
  }, [subscribeToMore]);



  if (loading) {
    return <div>Is Loading...</div>;
  }

  if (error) {
    return <div>Ooops, error...</div>;
  }

  return (
    <section className='message-list'>
      {messages.length
        ? messages.map((message) => <Message text={message.text} key={message.id} />)
        : <div>No messages</div>
      }
    </section>
  )
}

export default MessageList;