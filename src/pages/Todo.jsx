import { useEffect, useState } from 'react'
import PageTitle from '../components/PageTitle'
import { getAll } from '../services/todos'

const Todo = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    const getList = async () => {
      try {
        const list = await getAll();
        setList(list)
      } catch (error) {
        alert(error.message)
      }
    };

    getList();

  }, [])

  return (
    <>
      <PageTitle title={'Todo List'} />

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, consequatur.</p>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {
              list && list.length ?
                list.map(item =>
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>
                      {
                        item.completed ?
                          <span className='badge text-bg-success'>Yes</span> :
                          <span className='badge text-bg-danger'>No</span>}
                    </td>
                  </tr>) :
                <tr>
                  <td colSpan={3} className='text-center text-muted'>No record found</td>
                </tr>
            }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default Todo