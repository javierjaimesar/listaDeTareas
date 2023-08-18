import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm';

function App() {
  return (
    <main className='bg-zinc-900 h-max'>
      <div className='container mx-auto p-4'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App