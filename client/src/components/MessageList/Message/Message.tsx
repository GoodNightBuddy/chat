import './style.scss'

interface IMessageProps {
  message: string
}

const Message: React.FC<IMessageProps> = (props) => {
  return (
    <div className='message'>
      <div className='message__text'>{props.message}</div>
      <div className='message__attributes'>
        <div className='message__like'>like</div>
        <div className='message__dislike'>dislike</div>
        <div className='message__comment'>comment</div>
      </div>
    </div>
  )
}

export default Message;