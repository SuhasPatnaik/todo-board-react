export default function Board({ taskItem, handleTodoDone }) {
  return (
    <>
      <div className="max-w-lg flex flex-col items-center justify-center border py-2 px-4">
        <p>{taskItem}</p>
        <button
          className="bg-violet-400 text-white mt-2 px-4 py-1 rounded hover:bg-violet-500"
          onClick={handleTodoDone}
        >
          Done
        </button>
      </div>
    </>
  );
}
