import { MockedProvider } from "@apollo/client/testing"; 
import {mount} from "enzyme";
import { POLICIES_QUERY } from "../components/AllPolicies";
import AllPolicies from "../components/AllPolicies"
import React from "react";
import {act} from "react-dom/test-utils";
import wait from "waait";
import { render } from  "@testing-library/react"
import Table from "../components/Table";

const mockPolicyData = {
    request:{
        query: POLICIES_QUERY,
    },
    result: {
        data:{
            getPolicies: [
                {
                  customer: {
                    id: "1",
                    firstName: "Tony",
                    lastName: "Stark"
                  },
                  provider: "Feather",
                  insuranceType: "Liability",
                  status: "Active",
                  policyNumber: "100",
                  startDate: "2022-02-21T00:00:00.000Z",
                  endDate: "2024-02-21T00:00:00.000Z",
                  createdAt: "2022-03-24T19:16:26.759Z"
                },
            ]
        }
    }
}


it("fetches policies data", async () => {
    let wrapper;
    await act(async () => {
        wrapper = mount(
            <MockedProvider addTypename={false} mocks= {[mockPolicyData]}>
                <AllPolicies />
            </MockedProvider>
        )
    })

    await act(() => wait(0));
    wrapper.update()
    expect(wrapper).toBeTruthy()

})

it("renders loading", () => {
    const {getByText} = render(
        <MockedProvider>
            <AllPolicies />
        </MockedProvider>
    )
    expect(getByText("Loading...")).toBeInTheDocument()
    

})

it("renders policy data in table", async() => {
    const {findByText} = render(
        <MockedProvider addTypename={false} mocks= {[mockPolicyData]}>
            <AllPolicies />
        </MockedProvider>
    )
    
    const provider = await findByText("Feather")
    expect(provider).toBeInTheDocument()

})
