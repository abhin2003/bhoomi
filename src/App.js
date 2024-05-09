
import './App.css';
import Button from './Components/Button/Button/Button';

function App() {
  return(
  <>
    Im here  !
    <Button title={'Test'} disable={false} type={'add'}/>
    <Button title={'Test'} disable={false} type={'remove'}/>
    <Button title={'Test'} disable={false} type={''}/>
  </>
  );
}

export default App;
