import React from "react";
import { Link } from "react-router-dom";

export default function ReviewItem(props) {
  const data = props.restaurant;
  const image = data.photo.images.medium.url;
  const name = data.photo.id;
  const vote = data.photo.helpful_votes;
  const caption = data.photo.caption;
  const uploaded_date = data.photo.uploaded_date;
  const date = uploaded_date.substring(0, 10);

  return (
    <div className="bg-white border-y border-gray-300 mt-8 pt-4 p-8 pl-0 mb-4 w-1/2">
      <div className="mb-2 flex gap-1 text-gray-500">
        <p>@{name}</p>
        <p>•</p>
        <p>{date}</p>
      </div>
      <div className="mb-4">
        <p>{caption}</p>
      </div>
      <div className="mb-4">
        <img src={image} alt="" className="w-full h-auto rounded-md" />
      </div>
      <div className="-mb-2 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-hand-thumbs-up-fill"
          viewBox="0 0 16 16"
        >
          <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
        </svg>
        <p className="text-gray-600">{vote}</p>
      </div>
      <Link
        to="/"
        className="text-grey-400 py-2 px-4 rounded-lg absolute top-52 left-8 flex items-center gap-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-arrow-left text-gray-500"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
        <h1 className="text-2xl">Review Item</h1>
      </Link>
    </div>
  );
}
