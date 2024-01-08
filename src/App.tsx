import { useState } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Middle } from './components/Middle';
import { Create } from './components/Create';

function App() {
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' }
  ]);

  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  let content = null;
  if (mode === 'WELCOME') {
    content = <Footer title={'Welcome'} body={'Hello React'} />
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Footer title={title} body={body} />
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(title: string, body: string) => {
      const newTopic = {
        id: nextId,
        title: title,
        body: body
      }
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      let nextId2 = nextId
      setNextId(nextId2++);
    }} ></Create>
  }


  return (
    <div className="App">
      <Header title={'오늘의 날씨'} onChangeMode={() => {
        setMode('WELCOME');
      }
      } />
      <Middle topic={topics} onChangeMode={(_id: any) => {
        setMode('READ')
        setId(_id);
      }} />
      {content}
      <a href='/create' onClick={(event) => {
        event.preventDefault();
        setMode('CREATE');
      }}>create</a>
    </div>
  );
}

export default App;
