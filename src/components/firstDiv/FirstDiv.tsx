import { useState } from 'react';
import './firstDiv.css';

export default function FirstDiv(): JSX.Element {
  const [myTyping, setMyTyping] = useState<string>('...');

  const checkMyTyping = (typing: string): void => {
    if (!typing) return setMyTyping('...');

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
