import { Variant, type Variants } from "motion/react";

type MotionVariantsProps = {
  initial: Variant;
  animation: Variant;
  exit: Variant;
};

export const motionVariants = ({
  initial,
  animation,
  exit,
}: MotionVariantsProps): Variants => {
  return {
    start: initial,
    middle: animation,
    end: exit,
  };
};
