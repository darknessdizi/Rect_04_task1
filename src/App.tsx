import './App.css';
import MessageHistory from './components/MessageHistory/MessageHistory';
import { ListMessages } from './modals/modals';
import { messages } from './const/const';

const data: ListMessages = messages;

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={data} />
        </div>
      </div>  
    </div>
  );
}

export default App;
