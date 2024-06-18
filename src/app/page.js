import EventCard from "./components/event-components/EventCard";
import CreatePost from "./components/post-components/CreatePost";
import PostCard from "./components/post-components/PostCard";

export default function Home() {
  return (
    <main className="grid grid-cols-3 gap-3 min-h-screen bg-gray-50 py-5 px-6">
      {/*empty space*/}
      <div className=" w-[60%] ml-auto"></div>
      {/*empty space*/}
      <div className="flex flex-col gap-3">
        <CreatePost />
        <PostCard />
        <EventCard />
      </div>
      {/*empty space*/}
      <div className=""></div>
    </main>
  );
}
