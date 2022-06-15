import { Button, message } from 'antd'

function showMessage() {
  message.success('这是一条消息')
}

function App() {
  return (
    <Button type="primary" onClick={showMessage}>
      按钮
    </Button>
  )
}

export default App
