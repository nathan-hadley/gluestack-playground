import { View } from "react-native";
import { Input, InputField } from "./ui/input";

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetScrollView,
  ActionsheetSectionHeaderText,
} from "./ui/actionsheet";

export default function BottomInputSheet({
  showActionsheet,
  handleClose,
}: {
  showActionsheet: boolean;
  handleClose: () => void;
}) {
  return (
    <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
          <ActionsheetSectionHeaderText>
            Bottom Input Actionsheet
          </ActionsheetSectionHeaderText>
        </ActionsheetDragIndicatorWrapper>

        <ActionsheetScrollView className="h-[60vh]">
          {/* Empty scroll view content */}
        </ActionsheetScrollView>

        <View className="w-full p-4 border-t">
          <Input>
            <InputField placeholder="Type something..." />
          </Input>
        </View>
      </ActionsheetContent>
    </Actionsheet>
  );
}
