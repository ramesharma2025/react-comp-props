function NavBar(props) {
  // console.log(props, "props");
  return (
    <>
      {/* <h1>{props.mydet.name}</h1>
      <h1>{props.mydet.email}</h1>{" "} */}
      <div>{props.children}</div>
    </>
  );
}

export default NavBar;
