
import './App.css'
import { Button } from './components/Button'
import { ShareIcon } from './icons/ShareIcon'
import { PlusIcon } from './icons/PlusIcon'
import { Card } from './components/Card'
import { CreateContentModal } from './components/CreateContentModal'

function App() {
  return <div className='p-4'>
    <CreateContentModal open={true} />
    <div className='flex justify-end gap-4'>
      <Button variant="primary" text="Add Content" startIcon={<PlusIcon />}></Button>
      <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />}></Button>
    </div>
    <div className='flex gap-4'>
      <Card type="twitter" link="https://x.com/abedin_ashraf07/status/1826078950529052755" title="First Tweet"></Card>
      <Card type="youtube" link="https://www.youtube.com/watch?v=Oo3qsxihXqY" title="Youtube" />
    </div>
  </div>
}

export default App
