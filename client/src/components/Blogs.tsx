import './stylesheets/Blogs.scss';

const Blogs:React.FC = () => {
    return (
        <div className='blogs'>
            <div className='inner'>
                <h1>部誌一覧</h1>
                <input type='text' placeholder='Search'/>
            </div>
        </div>
    );
}

export default Blogs;