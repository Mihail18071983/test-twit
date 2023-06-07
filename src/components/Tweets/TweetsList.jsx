import { useState, useEffect } from "react";

import { List, EmptyListMessage } from "./TweetsList.styled";
import Tweet from "./Tweet/Tweet";
import Button from "components/Shared/Button";
import ActionsPanel from "./ActionsPanel/ActionsPanel";
import { getAllUsers } from "components/Shared/api/users";

const TweetsList = () => {
  const [items, setItems] = useState([]);
  const [TotalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("all");
  const applyFilter = (filterValue) => {
    setFilter(filterValue);
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

   // eslint-disable-next-line array-callback-return
        const filteredItems = items.filter((item) => {
          if (filter === "all") return true;
          if (filter === "following") return item.follow;
          if (filter === "follow") return !item.follow;
        });
  console.log('filtered items', filteredItems)

  return (
    <>
      <ActionsPanel
        applyFilter={applyFilter}
      />
      {filteredItems.length > 0 && (
        <List noPadding={page >= TotalPages}>
          {filteredItems.map((item) => (
            <Tweet key={item.id} user={item} />
          ))}
        </List>
      )}
      {filteredItems.length < 1 && <EmptyListMessage>List is empty</EmptyListMessage>}
      {filteredItems.length > 0 && page !== TotalPages && (
        <Button onClick={loadMore}>Load more</Button>
      )}
    </>
  );
};

export default TweetsList;
