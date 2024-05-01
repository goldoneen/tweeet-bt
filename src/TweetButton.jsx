import React from "react";

export function TweetButton() {

  const tweetURL = "https://";

  return (
    <div>
      <a
        href={tweetURL}
        target="_blank"
      >
        Send a thank you tweet
      </a>
    </div>
  );
}