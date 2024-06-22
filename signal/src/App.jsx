import { columns } from './components/ui/datatable/columns'
import { DataTable } from './components/ui/datatable/data-table'
import data from '../data/users.json'
import './App.css'

export default function App() {

  return (
    <>
      <div className="container mx-auto py-10">
        {/* {JSON.stringify(data.users)} */}
        <DataTable columns={columns} data={data.users} />
      </div>
    </>
  )
}

