import { useNavigate } from "react-router-dom";

import { RiArrowGoBackLine } from "react-icons/ri";

import Button from "components/Shared/Button";
import { Panel, ActionsBox } from "./ActionsPanel.styled";

const ActionsPanel = ({applyFilter }) => {
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    applyFilter(e.target.value);
  };

  return (
    <Panel>
      <ActionsBox>  
          <Button
            onClick={() => navigate(-1)}
            icon={RiArrowGoBackLine}
            iconSize={20}
          >
            Go back
        </Button>
        <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="following">Following</option>
        <option value="follow">Follow</option>
      </select>
      </ActionsBox>
    </Panel>
  );
};

export default ActionsPanel;
