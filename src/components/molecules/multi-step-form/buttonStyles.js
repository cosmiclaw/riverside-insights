const commonButtonStyles = {
  fontSize: "16px",
  color: "white",
  padding: "14px 44px",
  borderRadius: "3px",
  lineHeight: "27px",
  textAlign: "center",
  marginBottom: "35px",
  marginTop: "34px",
  display: "inline-block",
};

export const buttonStyles = {
  next: {
    ...commonButtonStyles,
    background: "#0383c9",
    marginLeft: "8.5px",
    marginRight: "35%",
  },
  prev: {
    ...commonButtonStyles,
    background: "#81c442",
    marginRight: "8.5px",
    marginLeft: "35%",
  },
};
