import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import TodoList from "./TodoList";


const MyAddedTask = () => {

    const {user} = useAuth();
    console.log(user.email);
    const [myPosts, setMyPosts] = useState([]);
    console.log(myPosts);

    useEffect(() => {
        fetch(`https://task-management-server-two-phi.vercel.app/tasks`)
            .then(res => res.json())
            .then(data => setMyPosts(data))
    }, [])



    console.log(myPosts)

    return (
        <div>
            <Helmet>
                <title>JobTex | My Added Task</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-5">
                {
                    myPosts?.map(myPost => <TodoList
                        myPost={myPost}
                        key={myPost._id}
                    ></TodoList>)
                }
            </div>
        </div>
    );
};

export default MyAddedTask;