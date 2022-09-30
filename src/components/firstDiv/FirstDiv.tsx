import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeMyTyping } from '../../redux/slice';
import './firstDiv.css';

export default function FirstDiv(): JSX.Element {
  const [myTyping, setMyTyping] = useState<string>('...');
  const dispatchTyping = useDispatch();

  const checkMyTyping = (typing: string): void => {
    if (!typing) {
      dispatchTyping(changeMyTyping('...'));
      return setMyTyping('...')
    };

    dispatchTyping(changeMyTyping(typing));
    return setMyTyping(typing);
  };

  return (
    <div className='divOne'>
      <input
        type="text"
        placeholder='Digite algo...'
        onChange={ ({ target }) => checkMyTyping(target.value)}
        className='input-text'
      />
      <div className='divText'>
        <p>
          { myTyping }
        </p>
      </div>
    </div>
  );
}
