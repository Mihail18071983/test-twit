import { useState, useEffect } from "react";

import { List, EmptyListMessage } from "./TweetsList.styled";
import Tweet from "./Tweet/Tweet";
import Button from "components/Shared/Button";
import ActionsPanel from "./ActionsPanel/ActionsPanel";
import { getAllUsers } from "components/Shared/api/users";

const TweetsList = () => {
  const [items, setItems] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [TotalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(localStorage.getItem('filter')||'all');
  const applyFilter = (filterValue) => {
    setFilter(filterValue);
  };

  const handleFollowChange = (userId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === userId ? { ...item, follow: !item.follow } : item
      )
    );
  };

  useEffect(() => {
    const getUsers = async (p) => {
      try {
        const users = await getAllUsers(p);
        const totalPages = 4;
        setTotalPages(totalPages);

        setItems((items) => [...items, ...users]);
      } catch (error) {
        console.error(error.message);
      }
    };

    getUsers(page);
  }, [page]);

  const loadMore = () => {
    if (page === TotalPages) {
      return;
    }
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    const filteredItems = items.filter((item) => {
      if (filter === "all") return true;
      if (filter === "following") {
        return item.follow;
      }
      if (filter === "follow") {
        return !item.follow;
      }
    });
    console.log("filtered items", filteredItems);
    setFilteredUsers(filteredItems);
  }, [filter, items]);

  return (
    <>
      <ActionsPanel applyFilter={applyFilter} filter={filter} />
      {filteredUsers.length > 0 && (
        <List noPadding={page >= TotalPages}>
          {filteredUsers.map((item) => (
            <Tweet
              key={item.id}
              user={item}
              onFollowChange={handleFollowChange}
            />
          ))}
        </List>
      )}
      {filteredUsers.length < 1 && (
        <EmptyListMessage>List is empty</EmptyListMessage>
      )}
      {filteredUsers.length > 0 && page !== TotalPages && (
        <Button onClick={loadMore}>Load more</Button>
      )}
    </>
  );
};

export default TweetsList;
