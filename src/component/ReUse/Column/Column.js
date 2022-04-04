function Column({ className, children }) {
  return <div className={`${className ||""}`}> {children} </div>;
}

export default Column;
