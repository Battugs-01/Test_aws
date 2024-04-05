import React from "react";

const shapes = {
  round: "rounded-[28px]",
  square: "rounded-[0px]",
} as const;
const variants = {
  fill: {
    gray_100_19: "bg-gray-100_19 text-gray-100",
    orange_A200_cc: "bg-orange-A200_cc text-gray-100",
  },
  outline: {
    gray_100_7f: "border-gray-100_7f border-b border-solid text-gray-100",
  },
} as const;
const sizes = {
  xs: "h-[37px] px-4 text-sm",
  md: "h-[74px] px-[35px] text-2xl",
  sm: "h-[56px] px-8 text-base",
  lg: "h-[102px] px-[34px] text-2xl",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "lg",
  color = "gray_100_7f",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer border-solid ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
