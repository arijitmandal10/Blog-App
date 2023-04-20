import { useState, useEffect, useRef} from "react";



//Blogging App using Hooks
export default function Blog() {


    // let[title, setTitle] = useState("");
    //  let [content, setContent]= useState("");
    let [formData, setFormData] = useState({ title: "", content: "" });
    const [blogs, setBlogs] = useState([]);
    const titleRef = useRef(null);

    useEffect(()=>{
        titleRef.current.focus();

    },[])

    useEffect(()=>{

        if(blogs.length && blogs[0].title){
            document.title = blogs[0].title;
        }
        else{
            document.title="Blogs App"
        }
    })


    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e) {

        e.preventDefault();
        setBlogs([{ title: formData.title, content: formData.content }, ...blogs]);
        setFormData({ title: "", content: "" })
        titleRef.current.focus();
    }

    function handleDelete(i){
      setBlogs(blogs.filter((blog, index)=>i!==index))

    }

    return (
        <>
            {/* Heading of the page */}
            <h1>Write a Blog!</h1>

            {/* Division created to provide styling of section to the form */}
            <div className="section">

                {/* Form for to write the blog */}
                <form onSubmit={handleSubmit}>

                    {/* Row component to create a row for first input field */}
                    <Row label="Title">
                        <input className="input" value={formData.title} ref={titleRef}
                            placeholder="Enter the Title of the Blog here.."
                            onChange={(e) => setFormData({ title: e.target.value, content: formData.content })} />
                    </Row >

                    {/* Row component to create a row for Text area field */}
                    <Row label="Content">
                        <textarea className="input content" value={formData.content}
                            placeholder="Content of the Blog goes here.."
                            onChange={(e) => setFormData({ title: formData.title, content: e.target.value })} />

                    </Row >

                    {/* Button to submit the blog */}
                    <button className="btn">ADD</button>
                </form>

            </div>

            <hr />

            {/* Section where submitted blogs will be displayed */}
            <h2> BLOGS </h2>
            {blogs.map((blog, i) => (
                <>
                    {/* <div className="Blog" key={i}> */}

                    <div className="Blog">

                        <div className="contentmain">
                            <ul>
                           <li><h3>{blog.title}</h3></li> 
                           <li><p>{blog.content}</p></li>
                            </ul>
                        </div>
                        <button onClick={()=>handleDelete(i)}>X</button>
                    </div>
                    {/* </div> */}
                    <hr />
                </>
            ))}



        </>
    )
}

//Row component to introduce a new row section in the form
function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    )
}
