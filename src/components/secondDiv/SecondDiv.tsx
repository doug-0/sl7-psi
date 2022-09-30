import { useSelector } from 'react-redux';
import { useTyping } from '../../redux/slice';
import './secondDiv.css';

export default function SecondDiv(): JSX.Element {
  const myTyping = useSelector(useTyping);

  return (
    <div className='divTwo'>
      <div className='divText'>
        <p>
          { myTyping }
        </p>
      </div>
    </div>
  );
}
