const status = document.querySelector(".status");

function getSubscriptionStatus() {
    return new Promise ((resolve, reject) => {
        setTimeOut (() => {
            resolve ("VIP");
        }, 2000);
    });
}
function getVideo(getSubscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve ("show video") } 
        else if (subscription === "FREE")
            resolve ("show trailer"); {
        else {
          reject ("no video");
        }
    })
}
async function main() {
    const status = await getSubscriptionStatus();
    status.innerHTML = status;
    console.log(await getVideo(status))
}

main();


