import Image from "next/image"
const about = () => {
    return (
        <div>
            <h1 className="aboutIntro">
                <span className="i2">О</span>
                <span className="i2">&nbsp;</span>
                <span className="i2">н</span>
                <span className="i2">а</span>
                <span className="i2">с</span></h1>
            <div className="aboutSection">
                <span id="aboutUs" className="about1">
                    <Image width={500} height={600} className="aPic" src={"/profile1.png"} alt="profile 1"/>
                    <div className="ac"><h1 className="a1Info">Aaa</h1>
                    <p className="ap">Александр Зябликов</p>
                    <p className="al">Λλλ<span className="ap1">#0007</span></p></div>
                </span>
                <span id="aboutUs" className="about2">
                <Image width={500} height={600} className="aPic" src={"/profile2.png"} alt="profile 2"/>
                    <div className="ac"><h1 className="a1Info">Лосося любимая</h1>
                    <p className="ap">Ткалич Елена</p>
                    <p className="al">----<span className="ap1"></span></p></div>
                </span>
            </div>
        </div>

    )
}
export default about;