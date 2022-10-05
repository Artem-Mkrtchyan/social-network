import React, {useState, useEffect} from 'react';

interface IProps {
  status: string
  updateStatus: (status: string) => void
}

export const ProfileStatus: React.FC<IProps> = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect((() => {
    setStatus(props.status)
  }), [props.status])


  const activeEditMode = () => {
    setEditMode(true)
  }

  const deactiveEditMore = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
  }


  return (
    <div>
      {!editMode ?
        <p onClick={activeEditMode}>{props.status ? props.status : 'Set status'}</p> :
        <input onChange={onStatusChange} autoFocus={true} onBlur={deactiveEditMore} type="text" value={status} />}
    </div>
  )
}
