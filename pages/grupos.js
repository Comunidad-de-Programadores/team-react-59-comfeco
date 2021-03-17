import React from "react";
import Layout from '../components/general/Layout';
import MyGroup from '../components/group/MyGroup';
import Groups from '../components/group/Groups';

const Grupos = ({list_group}) => {
    
    return (
        <Layout>
            <main className="wrap">
                <div className="container-fluid wrap-group">
                    <div className="row top-xs col-xs-12">
                        <div className="col-xs-12 col-md-3">
                            <MyGroup />                        
                        </div>
                        <div className="col-xs-12 col-md-9">
                            <Groups grupos={list_group} />                                
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Grupos;

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/list_group')
    const list_group = await res.json()
    return {
      props: {
        list_group,
      },
    }
}