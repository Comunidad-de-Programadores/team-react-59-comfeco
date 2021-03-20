import React from "react";
import Image from "next/image";
import A from "../nano/A";
import Icono from "../nano/Icono";

const WidgetEvents = () => {
  const card = (
    <div className="card-event">
      <div className="card-event-title">
        Facebook developer circle - <span className="anio">2021</span>
      </div>
      <div className="card-event-body">
        <div className="card-event-body_image">
          <Image
            src="/default-event.jpg"
            alt="default avatar"
            width={70}
            height={70}
          />
        </div>
        <div className="card-event-body_description">
          Lorem ipsum is simply dummy text of the printing and...
        </div>
      </div>
      <div className="card-event-footer">30 de Junio 2021 • 3 PM a 3:30 PM</div>
    </div>
  );
  return (
    <>
      <section className="card-widget">
        <div className="borde-final"></div>
        <div className="card-widget-head card-flex-inline">
          <h3>Eventos de tu interés</h3>

          <A href="/eventos" css="card-widget_link">
            Ver mas
            <Icono css="icon-external-link" />
          </A>
        </div>
        <div className="card-widget-body card-scroll" data-size="small">
          {/* <!--cards--> */}
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

export default WidgetEvents;
