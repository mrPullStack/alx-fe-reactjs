import { Route, Routes } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import { useParams } from 'react-router-dom';

function BlogPost() {
    const { postId } = useParams();
    return <div>Post ID: {postId}</div>;
}


function Profile() {
    return (
        <div>
        <h2>Profile</h2>
        <Routes>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
            <Route path="/posts/:postId" element={<BlogPost />} />
        </Routes>
        </div>
    );
}

export default Profile;
