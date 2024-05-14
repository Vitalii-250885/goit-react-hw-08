import { useDispatch } from "react-redux";

import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";

import { logOut } from "../../redux/auth/operations";

import { useAuth } from "../../hooks/useAuth";

import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <Chip icon={<FaceIcon />} label={user.name} />
      <Chip label="Logout" onClick={() => dispatch(logOut())} />
    </div>
  );
};
