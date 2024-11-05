import ScrollAnimation from "react-animate-on-scroll";

export default function Gift() {
    const gifts = [
        {
            tipe: "Gopay/ShopeePay/Dana",
            number: "0858-9171-7523",
            name: "a.n ERLINDA RAHMAWATI",
        },
        {
            tipe: "Rekening BCA",
            number: "715-144-5296",
            name: "a.n UTTAR PRADESH NAHENDRA",
        },
        {
            tipe: "Rekening Jago",
            number: "1045-5721-1680",
            name: "a.n UTTAR PRADESH NAHENDRA",
        },
    ];

    const copyToClipboard = (text) => {
        const copyText = text.replace(/-/g, "");

        if (navigator.clipboard) {
            navigator.clipboard
                .writeText(copyText)
                .then(() => {
                    console.log("sukses di salin");
                })
                .catch((err) => {
                    console.error("Could not copy text: ", err);
                });
        }
        //  else {
        // const textArea = document.createElement("textarea");
        // textArea.value = copyText;
        // document.getElementById("gift").appendChild(textArea);
        // textArea.focus();
        // try {
        //     textArea.select();
        //     textArea.setSelectionRange(0, 99999);
        //     // For mobile devices
        //     // Copy the text inside the text field
        //     navigator.clipboard.writeText(textArea.value);
        //     document.getElementById("gift").removeChild(textArea);
        // } catch (err) {
        //     throw new Error(err);
        // }
        // }
    };

    return (
        <>
            <div
                id="gift"
                className="container text-black max-w-cu flex justify-center flex-col items-center "
            >
                <div className="card text-center p-6 mt-3  mb-24 shadow-lg gift">
                    <h1 className="text-4xl mt-3 mb-8 playball-regular">
                        Gift
                    </h1>
                    <ScrollAnimation
                        animateIn="fadeIn"
                        animateOut="fadeOut"
                        className="flex justify-center items-center"
                    >
                        <div
                            className="container flex gap-4 justify-center items-center mb-10 flex-col"
                            style={{ width: "300px" }}
                        >
                            {gifts.map((x, i) => {
                                return (
                                    <div key={i} className="container">
                                        <h1 className="text-xl font-bold">
                                            {x.tipe}
                                        </h1>
                                        <p className="text-xl">{x.number}</p>
                                        <p className="text-md">{x.name}</p>
                                        <div
                                            className="tooltip"
                                            data-tip={`Salin ${x.tipe}`}
                                        >
                                            <button
                                                onClick={() =>
                                                    copyToClipboard(x.number)
                                                }
                                                className="btn btn-sm bg-amber-800 hover:bg-amber-900 text-white"
                                            >
                                                Salin
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </>
    );
}
