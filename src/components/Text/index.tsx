import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-2xl font-medium md:text-[22px]",
  s: "text-base font-normal",
  "2xl": "text-5xl font-light md:text-[44px] sm:text-[38px]",
  "3xl": "text-[64px] font-normal md:text-5xl",
  xl: "text-[32px] font-medium md:text-3xl sm:text-[28px]",
  md: "text-lg font-medium",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "md",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-50 font-spacegrotesk ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
