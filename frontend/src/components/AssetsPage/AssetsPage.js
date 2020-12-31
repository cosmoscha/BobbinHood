import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

import './AssetsPage.css';

function AssetsPage () {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
          (res) => {
            if (res.data && res.data.errors) setErrors(res.data.errors);
          }
        );
      };

      return (
          <>
          <h1>assets page</h1>
          <ul> {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
          </ul>
          <div>hello this is the assets page </div>

          </>
      )
}

export default AssetsPage;
