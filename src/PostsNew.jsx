{ /* Form */ }
export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form className="row g-3">

        {/* Title */}
        <div className="col-12">
          <label htmlFor="formGroupExampleInput" className="form-label">Title</label>
          <input type="text" className="form-control" id="Title" placeholder="Nba Player" />
        </div>

        {/* Description/Body */}
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Description</label>
          <input type="text" className="form-control" id="Body" placeholder="position for what team" />
        </div>

        {/* Image */}
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Image</label>
          <input className="form-control" type="file" id="formFile" />
        </div>

        {/* Submit */}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}
