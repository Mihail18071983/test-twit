import { useState, useEffect } from "react";

import { getUserById, updateUserFollowers } from "components/Shared/api/users";

import { TweetBox, GoIt, ImageBox, Delimiter, InfoBox } from "./Tweet.styled";

import Avatar from "./Avatar";
import Button from "components/Shared/Button";

const Tweet = ({ user }) => {
  const [User, setUser] = useState({
    id: "",
    name: "",
    tweets: "",
    followers: "",
    avatar: "",
    follow: false,
  });

  const followHandle = () => {
    const newFollowState = !User.follow;
    setUser({ ...User, follow: newFollowState });

    patchFollow(User.id, newFollowState);
  };

  const patchFollow = async (id, newFollowState) => {
    try {
      const user = await getUserById(id);
      if (newFollowState) {
        user.followers += 1;
        user.follow = true;
        await updateUserFollowers(id, user.followers, user.follow);
        setUser((prevUser) => ({
          ...prevUser,
          follow: true,
          followers: user.followers,
        }));
      } else {
        user.followers -= 1;
        user.follow = false;
        await updateUserFollowers(id, user.followers, user.follow);
        setUser((prevUser) => ({
          ...prevUser,
          follow: false,
          followers: user.followers,
        }));
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      setUser(user);
    }
  }, [user]);

  return (
    <TweetBox>
      <GoIt />
      <ImageBox />
      <Delimiter />
      <Avatar avatar={user.avatar} />
      <InfoBox>
        <span>{User.tweets.toLocaleString("en-US")} TWEETS</span>
        <span>{User.followers.toLocaleString("en-US")} FOLLOWERS</span>
      </InfoBox>
      <Button onClick={followHandle} active={User.follow}>
        {User.follow ? "FOLLOWING" : "FOLLOW"}
      </Button>
    </TweetBox>
  );
};

export default Tweet;
