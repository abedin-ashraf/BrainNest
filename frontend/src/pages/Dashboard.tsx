
import { Button } from '../components/Button'
import { ShareIcon } from '../icons/ShareIcon'
import { PlusIcon } from '../icons/PlusIcon'
import { Card } from '../components/Card'
import { CreateContentModal } from '../components/CreateContentModal'
import { useEffect, useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { useContent } from '../hooks/useContent'

function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false);
    const { contents, refresh } = useContent();

    useEffect(() => {
        refresh()
    }, [modalOpen])

    return <div>
        <Sidebar />
        <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
            <CreateContentModal open={modalOpen} onClose={() => { setModalOpen(false) }} />
            <div className='flex justify-end gap-4'>
                <Button onClick={() => { setModalOpen(true) }} variant="primary" text="Add Content" startIcon={<PlusIcon />}></Button>
                <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />}></Button>
            </div>
            <div className='flex gap-4 flex-wrap'>
                {contents.map(({ type, link, title }) =>
                    <Card type={type} link={link} title={title}></Card>
                )}
                {/* 
                <Card type="youtube" link="https://www.youtube.com/watch?v=Oo3qsxihXqY" title="Youtube" /> */}
            </div>
        </div>
    </div>
}

export default Dashboard
