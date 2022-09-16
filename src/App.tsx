import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: inline-grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 170, 70, 1);
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled(motion.div)`
  background-color: #ffffff;
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const boxVariants = {
  hover: { width: 550, height: 250 },
};

const Button = styled.button `
 width:150px;
 height:50px;
`

function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);

  return (
    <Wrapper>
      <Grid>
        <Box onClick={() => setId("1")} key={"1"} layoutId={"1"}           
          variants={boxVariants}
          whileHover={{scale:1.3, originZ:0, originX:1, originY:1}}
        />
        <Box onClick={() => setId("2")} key={"2"} layoutId={"2"}
          variants={boxVariants}
          whileHover={{scale:1.3, originZ:0, originX:0, originY:1}}
        >
          {!clicked ? (
            <Circle layoutId="circle" style={{ borderRadius: 50 }} />
          ) : null}
        </Box>
        <Box onClick={() => setId("3")} key={"3"} layoutId={"3"}
          variants={boxVariants}
          whileHover={{scale:1.3, originZ:0, originX:1, originY:0}}
        >
          {clicked ? (
              <Circle layoutId="circle" style={{ borderRadius: 50 }} />
            ) : null}
        </Box>
        <Box onClick={() => setId("4")} key={"4"} layoutId={"4"} 
          variants={boxVariants}
          whileHover={{scale:1.3, originZ:1, originX:0, originY:0}}
        />
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box layoutId={id} style={{ width: 300, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <div className="buttonBox">      
        <Button onClick={toggleClicked}>
          Switch
        </Button>
      </div>
    </Wrapper>
  );
}

export default App;
