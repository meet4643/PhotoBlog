import { useState, useEffect } from "react";
import React from "react";

function Home() {
  // Hooks

  useEffect(() => {
    document.title = num;
  });

  const [num, setNum] = useState(0);

  const img1 = "https://picsum.photos/200/300";
  const img2 = "https://picsum.photos/200";
  const img3 = "https://picsum.photos/seed/picsum/200/300";
  const img4 = "https://picsum.photos/200/300?grayscale";
  return (
    <>

    

      <div className="img">
        <h1>
          {" "}
          Capture the Moments,
          <br /> Capture Life
        </h1>
      </div>

      <div className="container text-center p-5">
        <h2 className="p-4 ">photographing life's little moments..</h2>
        <p>
          Stephanie Anne has been a professional photographer for 10 years. She
          has extensive knowledge in working with clients for various types of
          portrait photography. Stephanie has developed her skills as a
          photographer over the years to provide beautiful and professional
          photographs to her clients. If you have never had a professional shoot
          before she offers guidance in posing and creates a fun and enjoyable
          experience for all involved. She takes exceptional care in capturing
          your precious moments in life.
        </p>
      </div>

      <h4 className="container text-center p-2">BROWSE MY WORK</h4>
      <div className="browse container  ">
        <a href="/">
          <img className="m-3" src={img1} alt="" />
        </a>
        <a href="/">
          <img className="m-3" src={img4} alt="" />
        </a>
        <a href="/">
          <img className="m-3" src={img3} alt="" />
        </a>
        <a href="/">
          <img className="m-3" src={img2} alt="" />
        </a>
      </div>
      <div className="container text-center ">
        <button
          onClick={() => setNum(num + 1)}
          className="btn btn-outline-dark m-5 p-2 "
          type="click"
        >
          See More Work
        </button>
        <button
          onClick={() => (num === 0 ? setNum(0) : setNum(num - 1))}
          className="btn btn-outline-dark m-5 p-2 "
          type="click"
        >
          See More Work
        </button>

        <h1>{num}</h1>

        <div className="writing">
          <h4>
            " Amazing experience working with Stephanie! Absolutely love the
            pictures and so pleased with the images. She is a true professional
            with amazing quality work! She has great communication and made me
            feel comfortable during our shoot. Thanks so much Stephanie!
          </h4>
          <br />
          <h4>
            " In my request for a professional image for my website, Hello Miss
            Anne Photography met all criteria that was needed to present my
            professional image. Hello Miss Anne Photography also worked on a
            request of personal photography and I am very pleased with the
            results. Thank you to Hello Miss Anne Photography."
          </h4>
          <br />

          <h4>
            " Hiring Hello Miss Anne Photography to take photos for my Airbnb
            was probably the best decision I made in the whole listing process.
            Her work quality is second to none, she's professional and provides
            great value. Her work shows as I'm booked back to back for two
            months in advance and her photos draw in many, if not all, of my
            guests. Thank you Miss Anne!!!"
          </h4>
        </div>
      </div>
    </>
  );
}

export default Home;
