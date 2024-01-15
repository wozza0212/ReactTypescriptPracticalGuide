import { ComponentPropsWithoutRef, type ElementType } from "react";

type ContainerProps<T extends ElementType> = {
  as: ElementType;
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

const Container = <C extends ElementType>({
  as ,
  children,
  ...props
}: ContainerProps<C>) => {
  const Component = as || "div";
  return <Component className='Container' {...props}>{children}</Component>;
};

export default Container;
