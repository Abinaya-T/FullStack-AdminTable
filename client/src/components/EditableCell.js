import React from "react"
import { useMutation, gql } from '@apollo/client';

const UPDATE_POLICY = gql`
mutation UpdatePolicy($policyNumber: String, $insuranceType: String, $provider: String) {
  updatePolicy(PolicyNumber: $policyNumber, InsuranceType: $insuranceType, Provider: $provider) {
    policyNumber
    insuranceType
    provider
  }
}
`;

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, 
}) => {
  
  const [value, setValue] = React.useState(initialValue)
  const onChange = e => {
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