import { useState } from 'react'

// 2 - importando componente
import FirstComponent from './components/FirstComponent';
import Button from './components/Button';

// 4 - template expression
import TemplateExpression from './components/TemplateExpression';

// 5 - hierarquia de componentes
import MyComponent from './components/MyComponent';

// 6 - eventos
import Events from './components/Events';

function App() {
  const [count, setCount] = useState(0)

  // 3 - comentários    
  return (
    <>
    {/* comentário JSX */}
      <h1>Fundamentos do React</h1>
      <FirstComponent />
      <Button />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </>
  )
}

export default App
