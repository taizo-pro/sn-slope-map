import FlipMove from "react-flip-move"

function Results({ results }) {
  return (
    // <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
      console.log("🚀 ~ file: Results.js ~ line 7 ~ Results ~ result", result)
      ))}
    {/* </div> */}
    </FlipMove>
  );
}

export default Results;
