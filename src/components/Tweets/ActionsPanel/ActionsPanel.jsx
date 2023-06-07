import { useNavigate } from "react-router-dom";

import { RiArrowGoBackLine } from "react-icons/ri";

import Button from "components/Shared/Button";
import {ActionsBox } from "./ActionsPanel.styled";
import { Form } from "react-bootstrap";

const ActionsPanel = ({ applyFilter, filter }) => {
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    applyFilter(e.target.value);
    localStorage.setItem("filter", e.target.value);
  };

  return (
    <ActionsBox>
      <Button 
        onClick={() => navigate(-1)}
        icon={RiArrowGoBackLine}
        iconSize={20}
      >
        Go back
      </Button>
      <Form.Select value={filter} onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="following">Following</option>
        <option value="follow">Follow</option>
      </Form.Select>
    </ActionsBox>
  );
};

export default ActionsPanel;
