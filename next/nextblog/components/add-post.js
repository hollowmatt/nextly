export default function AddPost() {
  return(
    <div className="max-w-2xl mx-auto">
        <button 
          className="rounded-none shadow-lg p-5 bg-sky-500 hover:bg-cyan-600 hover:border-2 hover:border-indigo-900 mb-4">
          Add Post
        </button>
        <div>
          <input placeholder="Enter Markdown here..."></input>
        </div>
    </div>
   
  );
}