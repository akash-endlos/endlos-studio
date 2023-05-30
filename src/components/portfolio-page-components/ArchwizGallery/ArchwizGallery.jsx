import React from "react";

const ArchwizGallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/assets/archviz_1.jpg"
           alt="Card Image"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/assets/archviz_5.jpg"
           alt="Card Image"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/assets/archviz_2.jpg"
           alt="Card Image"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/assets/archviz_6.jpg"
           alt="Card Image"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/assets/archviz_3.jpg"
           alt="Card Image"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/assets/archviz_7.jpg"
           alt="Card Image"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/assets/archviz_4.jpg"
           alt="Card Image"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="/assets/archviz_8.jpg"
           alt="Card Image"
          />
        </div>
      </div>
    </div>
  );
};

export default ArchwizGallery;
