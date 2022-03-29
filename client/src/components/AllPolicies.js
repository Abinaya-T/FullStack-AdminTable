import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Table , {SelectColumnFilter, StatusPill} from './Table';

const POLICIES_QUERY = gql`
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

const columns = [
  {
    Header: "PolicyNumber",
    accessor: "policyNumber",
  },
  {
    Header: "CustomerId",
    accessor: "customer.id",
  },
  {
    Header: "Provider",
    accessor: "provider",
  },
  {
    Header: "Insurance Type",
    accessor: "insuranceType",
    Filter: SelectColumnFilter,
    filter: 'includes',
  },
  {
    Header: "Status",
    accessor: "status",
    Filter: SelectColumnFilter,
    filter: 'includes',
    Cell: StatusPill,
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

const LinkList = () => {
    const { data } = useQuery(POLICIES_QUERY);
    if(data){
      let arr = data.getPolicies
      var policies = arr.map(obj => {
          return {...obj, startDate: new Date(obj.startDate).toLocaleDateString(), endDate: new Date(obj.endDate).toLocaleDateString(), createdAt: new Date(obj.createdAt).toLocaleString() }; 
      });
      console.log(policies)
    }
    
    return (
        <div>
          {data && (
            <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">All Policies Table</h1>
        </div>
        <div className="mt-4">
          <Table columns={columns} data={policies} />
        </div>
      </main>
    </div>
          )}
        </div>
      );
    };

export default LinkList;