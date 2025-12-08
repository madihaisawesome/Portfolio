import "./MapBox.css";

const MapBox = () => {
  return (
    <section className="mapbox">
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321203.7052623736!2d-114.41746851454111!3d51.02715964129616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1765158037751!5m2!1sen!2sca" 
          width="400"
          height="300"
          loading="lazy"
          title="Google Map of Calgary"
        ></iframe>
      </figure>
    </section>
  );
};

export default MapBox;
