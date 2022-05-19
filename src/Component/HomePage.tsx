import React from "react";

export default function HomePage() {
  return (
    <div>
      <a target="_self" href="#">
        <button className="btn">
          <svg id="icon-svg">
            <path
              fill="#D70015"
              d="M5.76078 19.8401C6.13308 19.9971 6.54469 20.0397 6.94191 19.9625C7.33913 19.8852 7.70353 19.6916 7.98756 19.407L12 15.4701L16.0124 19.407C16.1995 19.5942 16.4224 19.743 16.6682 19.8447C16.9139 19.9465 17.1777 19.9991 17.4442 19.9996C17.7182 19.9988 17.9893 19.9446 18.2419 19.8401C18.6173 19.6903 18.9381 19.4323 19.1625 19.0998C19.3869 18.7673 19.5045 18.3757 19.4999 17.9763V7.36309C19.4988 6.47147 19.1393 5.61668 18.5002 4.98621C17.8611 4.35574 16.9946 4.00107 16.0908 4L7.90915 4C7.00535 4.00107 6.13888 4.35574 5.4998 4.98621C4.86071 5.61668 4.5012 6.47147 4.50012 7.36309V17.9763C4.49572 18.3761 4.61369 18.7678 4.83861 19.1003C5.06353 19.4329 5.38493 19.6907 5.76078 19.8401V19.8401Z"
            ></path>
          </svg>
        </button>
        <div className="box-card">
          <div className="box-bg">
            <div className="box-title row">
              <div className="title">L 01</div>
            </div>
          </div>
          <div className="box-text row">
            <span className="text">Lofl</span>
          </div>
          <div className="row">
            <span className="price">1,200</span>
            <div className="baht">บาท</div>
          </div>
          <div className="material row">
            <span className="text-1-material">สีทาบ้าน</span>
            <div className="text-2-material">
              <div className="icon-material">
                <img
                  src=""
                  className="text-icon-material"
                />
              </div>
              <span className="text-3-material">44 เข้าชม</span>
            </div>
          </div>
          <div className="box-img">
            <img
              src="https://iloftthailand.com/wp-content/themes/iloft-thailand/assets/images/color_example/black-6.jpg"
              className="img-material"
            />
          </div>
        </div>
      </a>
    </div>
  );
}
