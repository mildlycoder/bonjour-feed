import Image from "next/image";

const EventCard = () => {
  return (
    <div className="bg-white flex flex-col border-[1px] border-gray-200 rounded-lg p-4 gap-4">
      {/*tags*/}
      <div className="flex gap-4 items-center text-sm">
        <div className="bg-gray-200 px-2 py-1 rounded-[6px] text-gray-600 font-semibold">
          Happening Next weekend
        </div>
        <div className="bg-red-300 px-2 py-1 rounded-[6px] text-red-600 font-semibold">
          Sponsored ad
        </div>
      </div>

      {/*info*/}
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#9A9A9A"
              className="size-11"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] font-bold leading-tight">
              Your Brand .{" "}
              <span className="text-[12px] font-bold text-gray-600">25min</span>
            </p>
            <p className="text-[12px] text-gray-600 leading-tight">
              @yourbrand . <span>bangalore</span>
            </p>
          </div>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>
      {/*image*/}
      <div className="rounded-lg z-0 aspect-video w-full relative">
        <Image
          src="/event.png"
          alt="Event Image"
          layout="fill"
          className="object-cover rounded-lg"
        />
        <div className="absolute flex items-end rounded-lg z-10 top-0 border-2 border-red-100 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/60">
          <div className="backdrop-blur-[4px] text-white p-4 flex flex-col h-[45%] justify-between bg-gradient-to-b from-transparent to-black/60 w-full rounded-lg">
            <div>
              <div className="text-lg font-semibold">
                Lorem ipsum dolor sit amet{" "}
              </div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                reprehenderit enim labore culpa sint ad nisi Lorem pariatur
                mollit
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/30 text-[12px] px-2 p-1 rounded-[4px] backdrop-blur">
                24th, June
              </div>
              <div className="bg-white/30 text-[12px] px-2 p-1 rounded-[4px] backdrop-blur">
                4:00 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*buttons*/}
      <div className="flex items-center justify-between gap-3">
        <button className="basis-1/2 p-1 text-white rounded-[6px] text-[14px] bg-[#266FF3] flex items-center justify-center">
          <p>Interested</p>
        </button>
        <button className="basis-1/2 p-1 text-gray-700 border-[1px] border-gray-200 rounded-[6px] text-[14px] bg-gray-50 flex items-center justify-center">
          <p>More Info</p>
        </button>
      </div>

      {/*likes*/}
      <div className="flex items-center justify-between border-t-[1px] border-gray-200 p-4">
        <div className="flex items-center gap-5">
          <div className="flex text-gray-700  font-semibold  text-[12px] gap-1 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
              />
            </svg>
            <p>1.1k</p>
          </div>
          <div className="flex text-gray-700  font-semibold   text-[12px] gap-1 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
              />
            </svg>
            <p>1.1k</p>
          </div>
          <div className="flex text-gray-700   font-semibold   text-[12px] gap-1 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
            <p>1.1k</p>
          </div>
          <div className="flex text-gray-700 font-semibold  text-[12px] gap-1 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
            <p>1.1k</p>
          </div>
        </div>

        <div className="flex text-gray-700   font-semibold   text-[12px] gap-1 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
          <p>Save</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;