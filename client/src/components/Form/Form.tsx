import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { messageActionCreator } from '../../store/action';
import { AppDispatch } from '../../store/store';
import './style.scss'

const Form: React.FC = () => {

  const dispatch = useDispatch() as AppDispatch
  const [message, setMessage] = useState('')
  const textArea = useRef<HTMLTextAreaElement | null>(null)


  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    if (!message) return

    await dispatch(messageActionCreator.sendMessage(message))

    if (textArea.current) {
      textArea.current.value = ''
    }
  }

  return (
    <form action="" name='messageForm' className='messageForm' onSubmit={handleSubmit}>
      <textarea className='text' form='messageForm' onChange={handleChange} ref={textArea}></textarea>
      <button type="submit" className='submit-button'>Send</button>
    </form>
  )
};

export default Form;
