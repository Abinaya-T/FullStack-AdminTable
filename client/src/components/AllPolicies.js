import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Table , {SelectColumnFilter} from './Table';

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
            <>
              <Table columns={columns} data={policies} />
            </>
          )}
        </div>
      );
    };

export default LinkList;