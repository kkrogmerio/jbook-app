import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTypedSelector } from "./mainHooks/useTypedSelector";
import { useActions } from "./mainHooks/useActions";
import MainActionBar from "./components/mainActionBar";
import CellList from "./components/cellList";
import { useFetchSharedContentQuery } from "./client/apis/contentApi";
import './App.css';
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setEditable } = useActions();
  const [showError, setShowError] = useState(false);
  const noOfCells = useTypedSelector((state) => state.cells.order.length);
  const pathSegments = location.pathname.split("/");
  const {
    data: content,
    error,
    isLoading,
  } = useFetchSharedContentQuery(
    { shareId: pathSegments[2] },
    { skip: pathSegments.length <= 2 }
  );

  useEffect(() => {
    if (pathSegments.length === 2 && pathSegments[1] === "") {
      setEditable(true);
    } else if (pathSegments[1] === "content" && pathSegments.length > 2) {
      if (error) {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
          navigate("/"); 
        }, 3000);
      }
      if (content) {
        setEditable(false);
      }
    } else {
      navigate("/"); 
    }
  }, [setEditable, content, error, navigate]);

  if (showError) {
    return (
      <div className="has-text-centered vertical-center">
        <h1 className="title">Content not found!</h1>
        <h2 className="title">You will be redirected to the main page ...</h2>
      </div>
    );
  }
  if (isLoading) return <div />;
  return (
    <>
      {noOfCells > 0 && <MainActionBar />}
      <CellList />
    </>
  );
};

export default App;
