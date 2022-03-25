import React from 'react';
import Link from './Policy';
import { useQuery, gql } from '@apollo/client';

const POLICIES_QUERY = gql`
{
    getPolicies{
        policyNumber
        status
        insuranceType 
    }
}`

const LinkList = () => {
    const { data } = useQuery(POLICIES_QUERY);
    console.log(data)
    return (
        <div>
          {data && (
            <>
              {data.getPolicies.map((policy) => (
                <Link key={policy.policyNumber} policy={policy} />
              ))}
            </>
          )}
        </div>
      );
    };
export default LinkList;