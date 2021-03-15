import React from "react";
import Layout from '../components/general/Layout';
import MyGroup from '../components/group/MyGroup';
import Group from '../components/group/Group';

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
                            {/*<!--Buscador --> */}
                            <form>
                                <div className="form-group">
                                    <label htmlFor="cars">Buscar por lenguaje:</label>
                                    <select className="control-form form-default form-fullwidth" name="cars" id="cars">
                                        <option value="1">Javascript</option>
                                        <option value="2">php</option>
                                        <option value="3">python</option>
                                        <option value="4">swift</option>
                                        <option value="5">java</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name_group">Buscar por nombre del grupo</label>
                                    <input className="control-form form-default form-fullwidth" type="text" placeholder="Nombre del grupo" id="name_group" />
                                </div>
                            </form>


                            <div className="row">
                                {list_group.map((group) => (
                                    <div className="col-xs-12 col-md-4">
                                        <Group key={group.id} data={group}/>
                                    </div>
                                ))}
                            </div>
                                
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
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        list_group,
      },
    }
}