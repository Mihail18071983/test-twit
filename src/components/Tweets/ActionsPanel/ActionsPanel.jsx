import { useNavigate } from "react-router-dom";

import { RiArrowGoBackLine } from "react-icons/ri";

import Button from "components/Shared/Button";
import { Panel, ActionsBox } from "./ActionsPanel.styled";

const ActionsPanel = () => {
  const navigate = useNavigate();

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
      </ActionsBox>
    </Panel>
  );
};

export default ActionsPanel;
