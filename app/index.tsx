import BottomInputSheet from "@/components/BottomInputSheet";
import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import React, { useState } from "react";

export default function Index() {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(false);

  return (
    <>
      <Center className="flex-1 items-center justify-center">
        <Button onPress={() => setShowActionsheet(true)}>
          <ButtonText>Open Sheet</ButtonText>
        </Button>
      </Center>
      <BottomInputSheet
        showActionsheet={showActionsheet}
        handleClose={handleClose}
      />
    </>
  );
}
