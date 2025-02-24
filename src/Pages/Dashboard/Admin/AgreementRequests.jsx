import React, { useEffect } from "react";
import useAgreementsRequest from "../../../Hooks/useAgrementsRequest";
import RequestCard from "./RequestCard";

const AllUsers = () => {
    useEffect(() => {
      document.title = "Agreement Request | Grand Sultan ";
    }, []);
  const [requests] = useAgreementsRequest()
  
  return (
    <>
    <h1 className="text-3xl uppercase mt-10 font-semibold  text-purple-700 text-center">
        agreement requests is here
      </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
{
                    requests.map(request => <RequestCard key={request._id} request={request}></RequestCard>)
}
    </div>
    </>
  );
};

export default AllUsers;