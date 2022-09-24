import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useRemoveStoreTypeMutation } from '../../api/apiSlice'
import { toast } from 'react-toastify'
import './Category.css'

interface ICategory {
  name: string
}

const Category = ({ name }: ICategory) => {
  const [removeStoreType] = useRemoveStoreTypeMutation()

  const notifyError = (message: string) => {
    toast.error(message)
  }

  const removeTypeFromStore = async (name: string) => {
    await removeStoreType(name)
      .unwrap()
      .catch((err: any) => notifyError(err))
  }

  return (
    <div className='categoryItem'>
      <h1>{name}</h1>
      <button onClick={() => removeTypeFromStore(name)}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}

export default Category
