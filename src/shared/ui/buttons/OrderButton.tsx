import { Button, ButtonProps } from "@mantine/core"
import useStyles from "./OrderButton.style"

export default function OrderButton({
    children, type, uppercase
  }
    :ButtonProps
  ) {
    return (
      <Button
      className={useStyles().classes.orderButton}
      type={type}
      uppercase={uppercase}
      radius={"2px"}
      >{children}</Button>
    )
  }