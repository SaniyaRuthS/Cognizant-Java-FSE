
import './App.css';
import {books,blogs,courses} from './components/data';

function App(){

const bookdet=(
<ul>
{books.map(book=>(
<div key={book.id}>
<h3>{book.bname}</h3>
<h4>{book.price}</h4>
</div>
))}
</ul>
);

const content=(
<div>
{blogs.map(blog=>(
<div key={blog.id}>
<h2>{blog.title}</h2>
<h4>{blog.author}</h4>
<p>{blog.content}</p>
</div>
))}
</div>
);

const coursedet=(
<div>
{courses.map(course=>(
<div key={course.id}>
<h2>{course.name}</h2>
<h4>{course.date}</h4>
</div>
))}
</div>
);

return(
<div className="container">

<div className="section">
<h1>Course Details</h1>
{coursedet}
</div>

<div className="section">
<h1>Book Details</h1>
{bookdet}
</div>

<div className="section">
<h1>Blog Details</h1>
{content}
</div>

</div>
);
}

export default App;
