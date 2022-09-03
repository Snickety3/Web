const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    type: "svg",
    data: "https://marteoweb.netlify.app/",
    image: "https://marteoweb.netlify.app/proyectos/qr/foto.png",
    dotsOptions: {
        color: "#4267b2",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#e9ebee",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    }
});

qrCode.append(document.getElementById("canvas"));
qrCode.download({ name: "qr", extension: "svg" });
