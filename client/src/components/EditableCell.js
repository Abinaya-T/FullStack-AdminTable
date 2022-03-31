import React from "react"


const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, 
}) => {
  
  const [value, setValue] = React.useState(initialValue)
  const onChange = e => {
    console.log(e.target.value)
    setValue(e.target.value)
  }
  
  const onBlur = () => {
    updateMyData(index, id, value)
  }
  

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  return <input className="w-20" value={value} onChange={onChange} onBlur={onBlur} />
}
export default EditableCell