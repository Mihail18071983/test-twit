import { useState, useEffect } from "react";

import { List, EmptyListMessage } from "./TweetsList.styled";
import Tweet from "./Tweet";
import Button from "components/Shared/Button";
import ActionsPanel from "./ActionsPanel";
import { getAllUsers } from "components/Shared/api/users";

const TweetsList = () => {
  const [items, setItems] = useState([]);
  const [TotalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
  const [Filters, setFilters] = useState("all");

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

  return (
    <>
      <ActionsPanel
        setFilters={setFilters}
        setUsers={setItems}
        setPage={setPage}
      />
      {items.length > 0 && (
        <List noPadding={page >= TotalPages}>
          {items.map((item) => (
            <Tweet key={item.id} user={item} />
          ))}
        </List>
      )}
      {items.length < 1 && <EmptyListMessage>List is empty</EmptyListMessage>}
      {items.length > 0 && page !== TotalPages && (
        <Button onClick={loadMore}>Load more</Button>
      )}
    </>
  );
};

export default TweetsList;
