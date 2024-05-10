const theme = {
  color: {
    primaryColor: "#FF385C",
    secondaryColor: "#008489"
  },
  textColor: {
    primaryColor: "#484848"
  },
  mixin: {
    shadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      }
    `
  }
}

export default theme