import React from "react";

import MyGroup from '../../group/MyGroup';
import Groups from '../../group/Groups';

const Grupos = ({grupos}) => {
  return (
    <main className="wrap">
      <div className="container-fluid wrap-group">
        <div className="row top-xs col-xs-12">
          <div className="col-xs-12 col-md-3">
            <MyGroup />
          </div>
          <div className="col-xs-12 col-md-9">
            <Groups grupos={grupos} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Grupos;

