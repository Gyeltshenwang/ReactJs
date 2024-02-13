export const ProfileCard=({src,name,data})=>{
    return (
        <div>
            <img src = {src}>
            </img>
            <h3>{name}</h3>
            <p>{data}</p>
        </div>
    );
}