import { colors, IconButton, IconButtonProps } from "@material-ui/core";
import MuiButton, { ButtonProps } from "@material-ui/core/Button";
import { Close, Favorite } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import React from "react";
import { Link } from "react-router-dom";

export interface mButtonProps extends ButtonProps {
  title?: string;
}
export interface mIconButtonProps extends IconButtonProps {
  isClicked?: boolean;
  to?:string;
}

const Button: React.FC<mButtonProps> = (props) => {
  const { title = "button", variant = "contained", color, ...rest } = props;
  return (
    <MuiButton variant={variant} color={color} {...rest}>
      {title}
    </MuiButton>
  );
};

export const ButtonSubmit: React.FC<mButtonProps> = ({
  title,
  onClick,
  disabled,
}) => {
  return (
    <MuiButton
      style={{ padding: "8px 24px" }}
      variant="contained"
      onClick={onClick}
      size="small"
      color="primary"
      disabled={disabled}
    >
      {title}
    </MuiButton>
  );
};

export const SearchButtonIcon: React.FC<IconButtonProps> = ({ onClick }) => (
  <IconButton type="submit" onClick={onClick}>
    <SearchIcon />
  </IconButton>
);
export const UserButtonIcon: React.FC<mIconButtonProps> = ({to,...rest}) => (
  <Link to={to||""}>
    <IconButton type="submit" {...rest}>
      <PersonRoundedIcon style={{ color: "#fff" }} />
    </IconButton>
  </Link>
);
export const CloseButtonIcon: React.FC<IconButtonProps> = ({ onClick }) => (
  <IconButton type="submit" onClick={onClick}>
    <Close />
  </IconButton>
);
export const FavoriteButtonIcon: React.FC<mIconButtonProps> = ({
  onClick,
  isClicked,
}) => (
  <IconButton type="submit" onClick={onClick}>
    <Favorite color={(isClicked && "error") || "primary"} />
  </IconButton>
);
export default Button;
