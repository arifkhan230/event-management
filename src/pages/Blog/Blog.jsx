import { useLoaderData } from "react-router-dom";
import BlogTrend from "./BlogTrend.jsx/BlogTrend";


const Blog = () => {
    const blogs = useLoaderData({})
    const {title, content, trends} = blogs;
    return (
        <div className="max-w-[1440px] mx-auto lg:mt-10">
            <h2 className="text-3xl text-center font-bold"> {title}</h2>
            <p className="text-lg font-semibold mt-8">{content}</p>

            <div>
                {
                    trends.map(trend => <BlogTrend key={trend.id} trend={trend}></BlogTrend>)
                }
            </div>
        </div>
    );
};

export default Blog;