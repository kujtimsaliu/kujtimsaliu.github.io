
emailjs.init("eqrjesTzqfaxrYEfx");


function getUserIPAddress() {
    $.get("https://api.ipify.org?format=json", function(data) {
        var userIPAddress = data.ip;
        var currentURL = window.location.href; 

        var deviceInfo = {
            userAgent: navigator.userAgent,
            userdeviceName: navigator.deviceName,
            userdeviceName: navigator.language,
            userclipboard: navigator.clipboard,
            userdevName: navigator.deviceName,
            userLoc: navigator.location,
            usergeoLoc: navigator.geolocation,
            platform: navigator.platform,
            deviceName: getDeviceName(), 
        };

        var data = {
            ipAddress: userIPAddress,
            pageVisited: currentURL,
            deviceInfo: JSON.stringify(deviceInfo), 
        };

        emailjs.send("service_eyg2x9u", "template_dfh8iss", data)
            .then(function(response) {
                console.log("Email sent successfully", response);
            })
            .catch(function(error) {
                console.error("Email not sent", error);
            });
    });

}
function getDeviceName() {

    if (navigator.userAgent.match(/iPhone|iPad|iPod/)) {
        return "iOS Device";
    } else if (navigator.userAgent.match(/Android/)) {
        return "Android Device";
    } else {
        return "Unknown Device";
    }
}

getUserIPAddress();

// emailjs.send("service_eyg2x9u", "template_dfh8iss", data)
//     .then(function(response) {
//         console.log("Email sent successfully", response);
//     })
//     .catch(function(error) {
//         console.error("Email not sent", error);
//     });







