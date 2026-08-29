const hobbies = ["Motociclismo", "Fotografia", "Esportes"];

export const Hobbies = () => {
    const [hobbyPreferido, ...outrosHobbies] = hobbies;
    const novosHobbies = ["Festas"]
    const meusHobbies = [
        ...outrosHobbies,
        novosHobbies
    ]
    return (
        <>
            <div>
                <p>Estes são os meus hobbies:</p>
                <ul className="list-disc pl-10">
                    <li className="font-bold">{hobbyPreferido}</li>
                    {meusHobbies.map((outroHobby, i) =>
                        <li key={`hobby-${i}`}>{outroHobby}</li>)}
                </ul>
            </div>
        </>
    )
};













