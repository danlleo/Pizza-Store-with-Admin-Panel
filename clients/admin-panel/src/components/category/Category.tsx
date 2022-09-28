import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useRemoveStoreTypeMutation } from '../../api/apiSlice'
import { toast } from 'react-toastify'
import { SyncLoader } from 'react-spinners'
import './Category.css'

interface ICategory {
  name: string
  id: string
}

const Category = ({ name, id }: ICategory) => {
  const [removeStoreType, { isLoading, isSuccess }] =
    useRemoveStoreTypeMutation()

  const notifyError = (message: string) => {
    toast.error(message)
  }

  const removeTypeFromStore = async (name: string) => {
    await removeStoreType(name)
      .unwrap()
      .catch((err: any) => notifyError(err))
  }

  let content

  if (isLoading || isSuccess) {
    content = <SyncLoader size='10px' color='var(--main-accent-color)' />
  } else {
    content = (
      <button onClick={() => removeTypeFromStore(id)}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    )
  }

  return (
    <div className='categoryItem'>
      <h1>{name}</h1>
      {content}
    </div>
  )
}

export default Category
