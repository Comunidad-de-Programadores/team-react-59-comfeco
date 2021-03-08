import React from "react";
import Image from 'next/image';
import Link from "next/link";

const WidgetEvents = () => {
  return (
    <>
        <section className="card-widget">
            <div className="card-widget-head card-flex-inline">
                <h3>Eventos de tu interés</h3>
                <Link href="/eventos">
                    <a className="card-widget_link">Ver más</a>
                </Link>
            </div>
            <div className="card-widget-body card-scroll" data-size="small">
                {/* <!--cards--> */}
                <div className="card-event">
                    <div className="card-event-title">Commnunity Fest and Code - 2021</div>
                    <div className="card-event-body">
                        <div className="card-event-body_image">
                        <Image src="/default-event.jpg" alt="default avatar" width={70} height={70} />
                        </div>
                        <div className="card-event-body_description">Lorem ipsum is simply dummy text of the printing and...</div>
                    </div>
                    <div className="card-event-footer">
                        14 de Febrero 2021 • 2 PM a 4 PM
                    </div>
                </div>
                <div className="card-event">
                    <div className="card-event-title">Commnunity Fest and Code - 2021</div>
                    <div className="card-event-body">
                        <div className="card-event-body_image">
                        <Image src="/default-event.jpg" alt="default avatar" width={70} height={70} />
                        </div>
                        <div className="card-event-body_description">Lorem ipsum is simply dummy text of the printing and...</div>
                    </div>
                    <div className="card-event-footer">
                        20 de Marzo 2021 • 1 PM a 2 PM
                    </div>
                </div>
                <div className="card-event">
                    <div className="card-event-title">Commnunity Fest and Code - 2021</div>
                    <div className="card-event-body">
                        <div className="card-event-body_image">
                        <Image src="/default-event.jpg" alt="default avatar" width={70} height={70} />
                        </div>
                        <div className="card-event-body_description">Lorem ipsum is simply dummy text of the printing and...</div>
                    </div>
                    <div className="card-event-footer">
                        30 de Junio 2021 • 3 PM a 3:30 PM
                    </div>
                </div>
                {/* <!-- end cards --> */}
            </div>
        </section>
    </>
  );
};

export default WidgetEvents;
