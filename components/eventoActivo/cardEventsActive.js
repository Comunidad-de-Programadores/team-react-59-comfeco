import React from "react";
import Image from "next/image";
import Icono from "../nano/Icono";
import A from "../nano/A";


const CardEventsActive = () => {
  const card = (
    <div className="card-event-active">
      <div className="card-event-head">
        <Image
          src="/logo1.png"
          alt="Picture of the author"
          width={139}
          height={41}
        />
        <h3>!DUELO DE TITANES!</h3>
        <Icono css="icon-share" />
      </div>
      <div className="card-event-target">
        <h3>SPONSOR</h3>
        <div className="targets-image">
          <div className="target-container-image">
            <div className="target-image">
              <div className="target-image--rounded">
                <Image
                  src="/sponsors/sponsor-fernando_herrera.webp"
                  alt="sponsor"
                  width={90}
                  height={90}
                />
              </div>
            </div>
            <span>Fernando Herrera</span>
          </div>
          <div className="target-container-image">
            <div className="target-image">
              <div className="target-image--rounded">
                <Image
                  src="/sponsors-oficiales/sponsor-leonidas-esteban.png"
                  alt="sponsor"
                  width={90}
                  height={90}
                />
              </div>
            </div>
            <span>Leonidas Esteban</span>
          </div>
          <div className="target-container-image">
            <div className="target-image">
              <div className="target-image--rounded">
                <Image
                  src="/sponsors/sponsor-dominicode.webp"
                  alt="sponsor"
                  width={90}
                  height={90}
                />
              </div>
            </div>
            <span>Domini Code</span>
          </div>
          <div className="target-container-image">
            <div className="target-image">
              <div className="target-image--rounded">
                <Image
                  src="/sponsors/sponsor-jose_dimas_lujan.webp"
                  alt="sponsor"
                  width={90}
                  height={90}
                />
              </div>
            </div>
            <span>José Dimas Luján</span>
          </div>
          <div className="target-container-image">
            <div className="target-image">
              <div className="target-image--rounded">
                <Image
                  src="/sponsors/sponsor-tekkitv.webp"
                  alt="sponsor"
                  width={90}
                  height={90}
                />
              </div>
            </div>
            <span>TekkiTV</span>
          </div>
          <div className="target-container-image">
            <div className="target-image">
              <div className="target-image--rounded">
                <Image
                  src="/sponsors/sponsor-codelytv.webp"
                  alt="sponsor"
                  width={90}
                  height={90}
                />
              </div>
            </div>
            <span>CodelyTV</span>
          </div>
          <div className="target-container-image">
            <div className="target-image">
              <div className="target-image--rounded">
                <Image
                  src="/sponsors/sponsor-stacklycode.webp"
                  alt="sponsor"
                  width={90}
                  height={90}
                />
              </div>
            </div>
            <span>Stackly Code</span>
          </div>
          <div className="target-container-image">
            <div className="target-image">
              <div className="target-image--rounded">
                <Image
                  src="/sponsors/sponsor-latamdev.webp"
                  alt="sponsor"
                  width={90}
                  height={90}
                />
              </div>
            </div>
            <span>LatamDev</span>
          </div>
          <div className="target-container-image">
            <div className="target-image">
              <div className="target-image--rounded">
                <Image
                  src="/sponsors/sponsor-codigofacilito.webp"
                  alt="sponsor"
                  width={90}
                  height={90}
                />
              </div>
            </div>
            <span>Código Facilito</span>
          </div>
        </div>
      </div>
      <div className="card-event-target background-fuscia">
        <h3>ORGANIZA</h3>
        <div className="targets-image">
          <div className="target-container-image">
            <div className="target-image">
              <div className="target-image--rounded">
                <img
                  src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffae49dcf-7e01-40dd-a435-adcbf56f72c0%2Fnew_Imagen_Programador.png?table=block&id=edc76893-6add-402f-a435-48c2d6837f26&width=3090&userId=6b7cbe72-c418-4303-9561-4e0cf0548e46&cache=v2"
                  alt="default avatar"
                  width="70"
                  height="70"
                />
              </div>
            </div>
          </div>
          <div className="target-container-image">
            <div className="target-image">
              <div className="target-image--rounded">
                <img
                  src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F251de6e9-7154-4823-8646-1fd227f42a4b%2Fimage0.jpg?table=block&id=d2272fbf-3ff5-4030-86d6-0b408c8e17e2&width=3090&userId=6b7cbe72-c418-4303-9561-4e0cf0548e46&cache=v2"
                  alt="default avatar"
                  width="70"
                  height="70"
                />
              </div>
            </div>
          </div>
          <div className="target-container-image">
            <div className="target-image">
              <div className="target-image--rounded">
                <img
                  src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa173d523-295b-4dd0-98cb-c6963de94782%2F2f20e769-b428-41b0-964b-ddbd84e8765f.jpg?table=block&id=d3260c99-88e8-4dc2-a026-6fb3f06fd819&width=3090&userId=&cache=v2"
                  alt="default avatar"
                  width="70"
                  height="70"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-event-target background-black">
        <h3>FRAMEWORKS</h3>
        <div className="targets-image">
          <div className="target-container-image">
            <div className="target-image">
              <Image
                src="/iconosTeam/vue.svg"
                alt="vue"
                width={70}
                height={70}
              />
            </div>
            <span className="text-color-vue">VUE</span>
          </div>
          <div className="target-container-image">
            <div className="target-image">
              <Image
                src="/iconosTeam/react.svg"
                alt="react"
                width={70}
                height={70}
              />            </div>
            <span className="text-color-react">REACT</span>
          </div>
          <div className="target-container-image">
            <div className="target-image">
              <Image
                src="/iconosTeam/svelte.svg"
                alt="svelte"
                width={70}
                height={70}
              />
            </div>
            <span className="text-color-svelte">SVELTE</span>
          </div>
          <div className="target-container-image">
            <div className="target-image">
              <Image
                src="/iconosTeam/angular.svg"
                alt="angular"
                width={70}
                height={70}
              />
            </div>
            <span className="text-color-angular">ANGULAR</span>
          </div>
        </div>
      </div>
      <div className="card-event-footer">
        <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</span>
        <div className="card-buttons">
          <A href="/eventos" css="card-event_link">
            <span>Ver más</span>
            <Icono css="icon-external-link" />
          </A>
          <button class="participate">Participar</button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <section className="card-events">
        <div className="card-event-head card-flex-inline">
          <h3>Eventos Activos</h3>
        </div>
        <div className="card-event-body">
          {/* <!--cards--> */}
          {card}
          {card}
          {card}
          {card}
          {card}
          {card}
          {card}
          {card}
          {card}
          {card}
          {card}
          {/* <!-- end cards --> */}
        </div>
      </section>
    </>
  );
};

export default CardEventsActive;
