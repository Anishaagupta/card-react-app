// eslint-disable-next-line
import  React from "react";
import Cards  from './Cards';
import Sdata from './sdata'

const App = () => (
  <>
    <h1 className="heading">List of Awesome Series</h1>

    {Sdata.map((val)=>{
      console.log(val)
      return (
        <Cards
          key = {val.id}
          name={val.name}//names should be same as property
          title={val.title}
          imgLink={val.imgLink}
          srcLink={val.srcLink} />
      );
    })}      

  </>
);

export default App