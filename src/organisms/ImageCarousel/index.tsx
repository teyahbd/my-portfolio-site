function ImageCarousel() {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap" /* Prevents wrapping of flex items */,
        padding: "10px" /* Optional: Adds some space around the container */,
        width: "35vw",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: 150,
          height: 150,
          margin: 10,
          flexShrink: 0,
        }}
      ></div>
      <div
        style={{
          backgroundColor: "white",
          width: 150,
          height: 150,
          margin: 10,
          flexShrink: 0,
        }}
      ></div>
      <div
        style={{
          backgroundColor: "white",
          width: 150,
          height: 150,
          margin: 10,
          flexShrink: 0,
        }}
      ></div>
      <div
        style={{
          backgroundColor: "white",
          width: 150,
          height: 150,
          margin: 10,
          flexShrink: 0,
        }}
      ></div>
      <div
        style={{
          backgroundColor: "white",
          width: 150,
          height: 150,
          margin: 10,
          flexShrink: 0,
        }}
      ></div>
    </div>
  );
}

export default ImageCarousel;
