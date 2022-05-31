import { signOut } from "next-auth/react"
import { IconButton, Tooltip } from "@chakra-ui/react"
import { FaSignOutAlt } from "react-icons/fa"

interface SignOutButtonProps {
  isWideVersion: boolean
}

export function SignOutButton({ isWideVersion }: SignOutButtonProps) {
  return isWideVersion ? (
    <Tooltip label="Sign Out">
      <IconButton
        aria-label="Sign out"
        icon={<FaSignOutAlt size={32} />}
        color="red"
        bg="transparent"
        _hover={{ background: 0, filter: "brightness(0.9)" }}
        onClick={() => signOut()}
      />
    </Tooltip>
  ) : null
}
