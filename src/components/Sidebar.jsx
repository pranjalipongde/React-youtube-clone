import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const selectiveCategory = "New";

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectiveCategory && "#FC1503",
          color: "white",
        }}
      >
        <span
          style={{
            color: category.name === selectiveCategory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>

        <span style={{opacity: category.name === selectiveCategory ? '1' : '0.8'}}>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
