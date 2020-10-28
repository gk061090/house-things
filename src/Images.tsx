import React, { useEffect, useState } from "react";

export const Images = () => {
  const [uploads, setUploads] = useState([]) as any;
  const [images, setImages] = useState([]) as any;

  useEffect(() => {
    console.log(uploads);
  }, [uploads]);

  useEffect(() => {
    console.log(images);
  }, [images]);

  const openWidget = () => {
    const widget = (window as any).cloudinary.createUploadWidget(
      {
        cloudName: "gk061090",
        uploadPreset: "zptu6x1e",
        folder: "house/things",
      },
      (error: any, result: any) => {
        if (result.event === "success") {
          setUploads((prevImages: any) => [
            ...prevImages,
            {
              id: result.info.asset_id,
              thumbnail: result.info.thumbnail_url,
              source: result.info.secure_url,
            },
          ]);
        }
      }
    );
    widget.open();
  };

  const token = "house";
  const baseUrl = "http://localhost:9000/.netlify/functions/api/things";

  const send = () => {
    (async () => {
      const rawResponse = await fetch(baseUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token,
        },
        body: JSON.stringify({
          title: 1,
          description: "Textual content",
          images: uploads,
        }),
      });
      const content = await rawResponse.json();

      console.log(content);
    })();
  };

  const get = () => {
    (async () => {
      try {
        const response = await fetch(baseUrl, { headers: { token } as any });
        if (!response.ok) {
          throw new Error("Sanya hui sosi");
        }
        const data = await response.json();

        setImages(data);
        // console.log(data.map((post: any) => post.title));
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <>
      {/* <div>{JSON.stringify(image)}</div> */}
      <button type="button" className="btn widget-btn" onClick={openWidget}>
        Upload Via Widget
      </button>
      <button type="button" onClick={send}>
        Send
      </button>
      <button type="button" onClick={get}>
        Get
      </button>
      {images.map(({ images, _id }: any) => (
        <div key={_id}>
          {images.map((image: any, id: string) => (
            <img key={id} src={image.thumbnail} alt="" />
          ))}
        </div>
      ))}
    </>
  );
};
