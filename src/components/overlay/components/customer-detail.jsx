export const CustomerDetail = (props) => {
    return (
        <div className="w-[700px] h-[600px] flex-1 flex-shrink-1 bg-white rounded-lg flex gap-10 p-4">
            <div className="flex flex-col gap-3 items-center" >
                <img src="https://khudothi.vn/wp-content/uploads/2023/10/GigaChad-la-ai.jpg" alt="" 
                 className="w-[180px] h-[190px] rounded-full"
                />
                <div className="flex gap-2">
                    <span className="p-2 bg-yellow-300 rounded-3xl text-[14px] text-[#ea9b25] font-[600]">
                        {props.props.props.typeCustomer.name}
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-3 w-[70%]">
                <div className="flex flex-col gap-2 border-2 border-[gray] rounded-lg w-[100%] p-6">
                    <span className="text-[20px] font-[600] pb-3">
                        Basic Infomation
                    </span>
                    <span className="flex gap-2">
                        <img src="https://img.icons8.com/?size=100&id=11730&format=png&color=000000" alt="" 
                        className="w-[24px] h-[24px]"
                        />
                        Name: {props.props.props.name}
                    </span>
                    <span className="flex gap-2">
                        <img src="https://img.icons8.com/?size=100&id=11780&format=png&color=000000" alt="" 
                         className="w-[24px] h-[24px]"
                        />
                        Gender: {props.props.gender === 1 ? "Male" : "Female"}
                    </span>
                    <span className="flex gap-2">
                        <img src="https://img.icons8.com/?size=100&id=60611&format=png&color=000000" alt="" 
                         className="w-[24px] h-[24px]"
                        />
                        BirthDay: {props.props.props.dob}
                    </span>
                    <span className="flex gap-2">
                        <img src="https://img.icons8.com/?size=100&id=22127&format=png&color=000000" alt="" 
                         className="w-[24px] h-[24px]"
                        />
                        ID Card: {props.props.props.idCard}
                    </span>
                </div>
                <div className="flex flex-col gap-2 border-2 border-[gray] rounded-lg w-[100%] p-6">
                    <span className="text-[20px] font-[600] pb-3">
                        Contact Customer
                    </span>
                    <span className="flex gap-2">
                        <img src="https://img.icons8.com/?size=100&id=12580&format=png&color=000000" alt="" 
                         className="w-[24px] h-[24px]"
                         />
                        Email: {props.props.props.email}
                    </span>
                    <span className="flex gap-2">
                        <img src="https://img.icons8.com/?size=100&id=9659&format=png&color=000000" alt="" 
                        className="w-[24px] h-[24px]"
                        />
                        Phone: {props.props.props.phoneNumber}
                    </span>
                    <span className="flex gap-2">
                        <img src="https://img.icons8.com/?size=100&id=53430&format=png&color=000000" alt="" 
                        className="w-[24px] h-[24px]"
                        />
                        Address: {props.props.props.address}
                    </span>
                    
                </div>
                <div className="flex gap-3">
                    <img src="https://img.icons8.com/?size=100&id=yGcWL8copNNQ&format=png&color=000000" alt="" 
                    className="w-[50px] h-[50px] hover:scale-[1.1]"/>
                    <img src="https://img.icons8.com/?size=100&id=7rhqrO588QcU&format=png&color=000000" alt="" 
                    className="w-[50px] h-[50px] hover:scale-[1.1]"
                    />
                    <img src="https://img.icons8.com/?size=100&id=I24lanX6Nq71&format=png&color=000000" alt="" 
                    className="w-[50px] h-[50px] hover:scale-[1.1]"
                    />
                </div>
            </div>
        </div>
    )
}