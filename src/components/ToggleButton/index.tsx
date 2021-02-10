import * as React from "react";
import styled from "styled-components";

export interface ToggleButtonProps {
  /**
   * Click event
   */
  active: boolean;
  /**
   * Color variations
   */
  colorVariation?:
    | "#26E1CD"
    | "#FD4274"
    | "#FECF5C"
    | "#FDAFBB"
    | "#B6B0FC"
    | "#7DDFC3";
  /**
   * Label
   */
  label: string;
  /**
   * Click event
   */
  onClick?: () => void;
  /**
   * Hover event
   */
  onMouseOver?: () => void;
}

const Container = styled.li<ToggleButtonProps>`
  background: ${(props) => props.active && props.colorVariation};
  border: 2px solid ${(props) => props.colorVariation};
  border-radius: 30px;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  padding: 10px 20px;
  user-select: none;
  transition: all 0.15s cubic-bezier(0, 0.5, 1, 0.5);

  &:hover {
    background: ${(props) => props.colorVariation};
  }
`;

/**
 * Botão de Toggle
 */
export const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  const { label } = props;

  return <Container {...props}>{label}</Container>;
};
