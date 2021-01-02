import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import {NavLink} from "react-router-dom"

import './AssetsPage.css';

const Asset = ({})
const AssetsPage= ()=> {

      return (
          <>
          <div id="Assets-List">
              <NavLink to= {"/asset"}>assets</NavLink>
          </div>

          <ul>assets list
              {/* {AssetsPage.map(() => (
                  <li key={asset}>{asset}</li>
              ))} */}
          </ul>
          </>
      )
}

export default AssetsPage;
