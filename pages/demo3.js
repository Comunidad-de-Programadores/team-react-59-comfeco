import React from "react";
import CardSvelte from "../components/sliders/CardSlider/CardSvelte";
const demo3 = () => {
  return (
    <>
      <CardSvelte
        avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
        nameAvatar="Oscar barajas"
        descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
        team="react"
        idshow="rdact" idCont="rdasct"
      />
      <CardSvelte
        avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
        nameAvatar="Oscar barajas"
        descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
        team="svelte"
        idshow="sdelte" idCont="rdassct"
      />

      <CardSvelte
        avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
        nameAvatar="Oscar barajas"
        descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
        team="vue"
        idshow="vde" idCont="rdascsst"
     />
      {/* <CardSvelte
        avatar="/sponsors-oficiales/leader-oscar_barajas_lites.png"
        nameAvatar="Oscar barajas"
        descripction="Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam voluptate nostrum."
        team="angular"
        idshow="andular"
        idCont="rdassact"
      /> */}
    </>
  );
};

export default demo3;
