import withCounter from "./withCounter";

const CounterComp = (props) => {
  //  console.log(props);
  const { count, onIncrement, onDecrement } = props;
  return (
    <div>
      CounterComp Counter - {count}
      <br />
      <button onClick={onIncrement}>Inc</button>
      <button onClick={onDecrement}>Dec</button>
    </div>
  );
};

export default withCounter(CounterComp);
