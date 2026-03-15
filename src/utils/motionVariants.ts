import { Variant, type Variants } from "motion/react";

type MotionVariantsProps = {
  initial?: Variant | undefined;
  animation?: Variant | undefined;
  exit?: Variant | undefined;
};

export const motionVariants = ({
  initial,
  animation,
  exit,
}: MotionVariantsProps): Variants => {
  return {
    start: initial ?? {},
    middle: animation ?? {},
    end: exit ?? {},
  };
};
