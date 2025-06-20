import React, { useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";

const Tweet = () => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const [likesInfo, setLikesInfo] = useState([]); 
  const maxLimit = 240;

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const handleTweet = () => {
    if (tweet.trim() !== "" && tweet.length <= maxLimit) {
      setTweets([...tweets, tweet]);
      setLikesInfo([...likesInfo, { like: 0, dislike: 0, liked: false, disliked: false }]);
      setTweet("");
    }
  };

  const handleDelete = (indexToDelete) => {
    setTweets(tweets.filter((_, index) => index !== indexToDelete));
    setLikesInfo(likesInfo.filter((_, index) => index !== indexToDelete));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(tweets[index]);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const saveEdit = () => {
    const updatedTweets = [...tweets];
    updatedTweets[editIndex] = editText;
    setTweets(updatedTweets);
    setEditIndex(null);
    setEditText("");
  };

  const handleLike = (index) => {
    const updatedLikes = [...likesInfo];
    if (!updatedLikes[index].liked) {
      updatedLikes[index].like += 1;
      updatedLikes[index].liked = true;
      updatedLikes[index].disliked = false;
      if (updatedLikes[index].dislike > 0) updatedLikes[index].dislike -= 1;
      setLikesInfo(updatedLikes);
    }
  };

  const handleDislike = (index) => {
    const updatedLikes = [...likesInfo];
    if (!updatedLikes[index].disliked) {
      updatedLikes[index].dislike += 1;
      updatedLikes[index].disliked = true;
      updatedLikes[index].liked = false;
      if (updatedLikes[index].like > 0) updatedLikes[index].like -= 1;
      setLikesInfo(updatedLikes);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-200 to-yellow-300">
      <div className="bg-yellow-400 border-2 border-black p-6 rounded-3xl w-[500px] flex flex-col gap-y-4">
        <div className='flex justify-right text-black text-2xl ml-2'>
          <h2 className="text-2xl font-bold text-center text-blue-700">🕊 Tweet App</h2>
        </div>
        <textarea
          className="w-full h-32 p-3 border-2 border-black rounded-xl resize-none"
          placeholder="What's happening?"
          value={tweet}
          onChange={handleChange}
        />

        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">
            Characters: {tweet.length}/{maxLimit}
          </p>
          <button
            className={`px-4 py-2 rounded-xl font-bold text-white ${
              tweet.length > maxLimit || tweet.trim() === ""
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-800 hover:bg-blue-700"
            }`}
            disabled={tweet.length > maxLimit || tweet.trim() === ""}
            onClick={handleTweet}
          >
            Tweet
          </button>
        </div>

        <div className="flex justify-center items-center mt-4">
          <h2 className="text-2xl font-bold text-black">Your Tweets</h2>
        </div>

        <ul className="mt-4 space-y-3">
          {tweets.map((item, index) => (
            <li
              key={index}
              className="bg-white p-3 rounded-xl shadow-md text-black"
            >
              {editIndex === index ? (
                <>
                  <textarea
                    value={editText}
                    onChange={handleEditChange}
                    className="w-full border border-black rounded p-2 mb-2"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={saveEdit}
                      className="bg-green-500 px-3 py-1 rounded-lg text-white font-semibold"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditIndex(null)}
                      className="bg-gray-400 px-3 py-1 rounded-lg text-white font-semibold"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="mb-2">{item}</p>
                  <div className="flex gap-2 items-center">
                    <button
                      className="bg-blue-400 px-3 py-1 rounded-lg text-white font-semibold"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 px-3 py-1 rounded-lg text-white font-semibold"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => handleLike(index)}
                      className={`${
                        likesInfo[index]?.liked ? "bg-green-700" : "bg-green-500"
                      } px-4 py-2 rounded-lg text-white flex items-center gap-1`}
                      disabled={likesInfo[index]?.liked}
                    >
                      <BiLike /> {likesInfo[index]?.like}
                    </button>

                    <button
                      onClick={() => handleDislike(index)}
                      className={`${
                        likesInfo[index]?.disliked
                          ? "bg-gray-700"
                          : "bg-gray-500"
                      } px-4 py-2 rounded-lg text-white flex items-center gap-1`}
                      disabled={likesInfo[index]?.disliked}
                    >
                      <BiDislike /> {likesInfo[index]?.dislike}
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tweet;
