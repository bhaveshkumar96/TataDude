import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <HStack width={"100%"} height={"25px"} display={"flex"} justifyContent={"space-between"} m={"0px 15px 0px 15px"}>
      <Stack width={"fit-content"}>
        <Image
          src="https://www.tutedude.com/refundassets/Tutedude.png"
          alt="tutedude"
          w={"35%"}
        />
      </Stack>

      <Stack>
        <FaUserCircle />
        <Text>Profile Name</Text>
      </Stack>
    </HStack>
  );
};

export default Navbar;
