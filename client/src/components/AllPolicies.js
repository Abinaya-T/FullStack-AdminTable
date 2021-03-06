import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import Table, { SelectColumnFilter, StatusPill } from './Table';
import EditableCell from './EditableCell';

export const POLICIES_QUERY = gql`
{
    getPolicies{
        policyNumber
        customer{
        id
        firstName
        lastName
        }
        provider
        insuranceType
        status 
        startDate
        endDate
        createdAt
    }
}`

export const UPDATE_POLICY = gql`
mutation UpdatePolicy($policyNumber: String, $insuranceType: String, $provider: String) {
  updatePolicy(PolicyNumber: $policyNumber, InsuranceType: $insuranceType, Provider: $provider) {
    policyNumber
    insuranceType
    provider
  }
}
`;

const columns = [
  {
    Header: "Policy.No",
    accessor: "policyNumber",
  },
  {
    Header: "Cus.Id",
    accessor: "customer.id",
  },
  {
    Header: "Name",
    accessor: d => `${d.customer.firstName} ${d.customer.lastName}`
  },
  {
    Header: "Provider",
    accessor: "provider",
    Cell: EditableCell,
  },
  {
    Header: "Insurance Type",
    accessor: "insuranceType",
    Filter: SelectColumnFilter,
    filter: 'includes',
    Cell: EditableCell,
  },
  {
    Header: "Status",
    accessor: "status",
    Filter: SelectColumnFilter,
    filter: 'includes',
    Cell: StatusPill, EditableCell,
  },
  {
    Header: "Start Date",
    accessor: "startDate",
  },
  {
    Header: "End Date",
    accessor: "endDate",
  },
  {
    Header: "Created Date",
    accessor: "createdAt",
  },

]


const AllPolicies = () => {

  const { data, error, loading } = useQuery(POLICIES_QUERY);
  const [updatePolicy] = useMutation(UPDATE_POLICY)

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) return <p>Error! {error.message}</p>;
  if (data) {
    let arr = data.getPolicies
    var policies = arr.map(obj => {
      return { ...obj, startDate: new Date(obj.startDate).toLocaleDateString(), endDate: new Date(obj.endDate).toLocaleDateString(), createdAt: new Date(obj.createdAt).toLocaleDateString() };
    });
  }

  const updateMyData = (rowIndex, columnId, value) => {
    const policyNum = policies[rowIndex].policyNumber
    if(columnId === 'insuranceType'){
    updatePolicy({ variables: { policyNumber: policyNum, insuranceType: value} })
    }
    if(columnId === 'provider'){
      updatePolicy({ variables: { policyNumber: policyNum, provider: value} })
    }
  };


  return (
    <div>
      {data && (
        <div className="min-h-screen bg-gray-100 text-gray-900">
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="policy-table">
              <h1 className="text-2xl text-violet-500 font-bold">All Policies Table</h1>
            </div>
            <div className="mt-4">
              <Table columns={columns} data={policies} updateMyData={updateMyData}/>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default AllPolicies;