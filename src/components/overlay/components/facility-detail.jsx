export const FacilityDetail = (props) => {
    const propss = props.props;
    return (
        <div className="w-[600px] h-[500px] bg-white rounded-lg flex flex-col items-center p-4 gap-3">
            <img src="https://xuonggooccho.com/ckfinder/userfiles/files/Hinh-anh-phong-ngu-dep-1.jpg" alt=""
                className="w-[500px] h-[300px] rounded-lg"
            />
            <div className="flex flex-col gap-1 items-center">
                <span>
                    Name: {propss.props.name}
                </span>
                <span>
                    Standar room: {propss.props.standardRoom}
                </span>
                <span>
                    Description: {propss.props.description}
                </span>
                <span>
                    Max: {propss.props.maxPeople} people
                </span>
                <span>
                    Cost: {propss.props.cost}
                </span>
            </div>
        </div>
    )
}