import './userinfo.css';

const Userinfo = () => {
    return (
        <div className='userinfo'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Antony</h2>
            </div>
            <div className="icons">
                <img src="./more.png" alt="" />
                <img src="./edit.png" alt="" />
            </div>
        </div>
    )
}

export default Userinfo;