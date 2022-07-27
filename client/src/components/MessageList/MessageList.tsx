import { useAppSelector } from '../../store/store';
import Message from './Message/Message';
import './style.scss'

const MessageList: React.FC = () => {

  const messages = useAppSelector(state => state.message.messageList)

  return (
    <section className='message-list'>
      {messages.length 
        ? messages.map((message, index) => <Message message={message} key={index}/>)
        : <div>No messages</div>
      }
    </section>
  )
}

export default MessageList;