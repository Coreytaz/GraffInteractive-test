import useTitle from "../../shared/lib/useTitle";
import Content from "./Content";
import Sidebar from "./Sidebar";

const IndexPage = () => {
    useTitle("SpaceX Ships");
    return (
        <div className="container">
            <Content />
            <Sidebar />
        </div>
    )
}

export default IndexPage