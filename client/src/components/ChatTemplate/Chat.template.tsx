import Form from '../Form/Form';
import MessageList from '../MessageList/MessageList';
import './style.scss'
const ChatTemplate: React.FC = () => (
  <main className='chat-template'>
    <Form />
    <MessageList />
  </main>

  
);

export default ChatTemplate;
