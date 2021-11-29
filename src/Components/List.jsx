const List = (props) => {
    if (props.ordered) {
      return <ol>{props.children}</ol>;
    } else {
      return <ul>{props.children}</ul>;
    }
};

export default List;