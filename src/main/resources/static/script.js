// ===============================
// REGISTER
// ===============================

async function registerUser() {

    const name = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    });

    const message = await response.text();

    document.getElementById("registerMessage").innerText = message;
}


// ===============================
// LOGIN
// ===============================

async function loginUser() {

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

    const message = await response.text();

    document.getElementById("loginMessage").innerText = message;

    if (message === "Login successful") {
        localStorage.setItem("userEmail", email);
        alert("Login successful!");
    }
}


// ===============================
// CALCULATOR
// ===============================

function calculate() {

    const seed = Number(document.getElementById("seed").value) || 0;
    const fertilizer = Number(document.getElementById("fertilizer").value) || 0;
    const pesticide = Number(document.getElementById("pesticide").value) || 0;
    const labour = Number(document.getElementById("labour").value) || 0;
    const tractor = Number(document.getElementById("tractor").value) || 0;
    const water = Number(document.getElementById("water").value) || 0;
    const other = Number(document.getElementById("other").value) || 0;

    const production =
        Number(document.getElementById("production").value) || 0;

    const price =
        Number(document.getElementById("price").value) || 0;


    const totalExpense =
        seed +
        fertilizer +
        pesticide +
        labour +
        tractor +
        water +
        other;


    const totalIncome =
        production * price;


    const profitLoss =
        totalIncome - totalExpense;


    document.getElementById("totalExpense").innerText =
        totalExpense.toFixed(2);

    document.getElementById("totalIncome").innerText =
        totalIncome.toFixed(2);


    if (profitLoss >= 0) {

        document.getElementById("profitLoss").innerText =
            "Profit: ₹" + profitLoss.toFixed(2);

    } else {

        document.getElementById("profitLoss").innerText =
            "Loss: ₹" + Math.abs(profitLoss).toFixed(2);
    }
}


// ===============================
// SAVE FULL CALCULATION
// ===============================

async function saveCurrentCalculation() {

    const email = localStorage.getItem("userEmail");

    if (!email) {
        alert("Please login first.");
        return;
    }


    const farmerName =
        document.getElementById("farmerName").value;

    const crop =
        document.getElementById("crop").value;

    const area =
        Number(document.getElementById("area").value) || 0;


    const seed =
        Number(document.getElementById("seed").value) || 0;

    const fertilizer =
        Number(document.getElementById("fertilizer").value) || 0;

    const pesticide =
        Number(document.getElementById("pesticide").value) || 0;

    const labour =
        Number(document.getElementById("labour").value) || 0;

    const tractor =
        Number(document.getElementById("tractor").value) || 0;

    const water =
        Number(document.getElementById("water").value) || 0;

    const other =
        Number(document.getElementById("other").value) || 0;


    const production =
        Number(document.getElementById("production").value) || 0;

    const price =
        Number(document.getElementById("price").value) || 0;


    const totalExpense =
        Number(document.getElementById("totalExpense").innerText) || 0;

    const totalIncome =
        Number(document.getElementById("totalIncome").innerText) || 0;

    const profitLoss =
        totalIncome - totalExpense;


    const params = new URLSearchParams({

        email: email,

        farmerName: farmerName,

        crop: crop,

        area: area,

        seed: seed,

        fertilizer: fertilizer,

        pesticide: pesticide,

        labour: labour,

        tractor: tractor,

        water: water,

        other: other,

        production: production,

        price: price,

        totalExpense: totalExpense,

        totalIncome: totalIncome,

        profitLoss: profitLoss
    });


    try {

        const response = await fetch(
            "/api/calculations/save?" + params.toString(),
            {
                method: "POST"
            }
        );


        const message = await response.text();


        document.getElementById("saveMessage").innerText =
            message;


    } catch (error) {

        console.error(error);

        document.getElementById("saveMessage").innerText =
            "Calculation save failed";
    }
}


// ===============================
// LOAD FULL HISTORY
// ===============================

async function loadHistory() {

    const email = localStorage.getItem("userEmail");

    if (!email) {
        alert("Please login first.");
        return;
    }


    try {

        const response = await fetch(
            "/api/calculations/history/" +
            encodeURIComponent(email)
        );


        const history =
            await response.json();


        const historyDiv =
            document.getElementById("history");


        historyDiv.innerHTML = "";


        if (history.length === 0) {

            historyDiv.innerHTML =
                "<p>No calculation history found.</p>";

            return;
        }


        history.forEach(function (calculation) {

            const item =
                document.createElement("div");


            item.innerHTML = `

                <div style="
                    border:1px solid #ccc;
                    padding:15px;
                    margin:10px 0;
                    border-radius:10px;
                ">

                    <h3>🌾 Calculation #${calculation.id}</h3>

                    <p><b>👨‍🌾 Farmer Name:</b>
                    ${calculation.farmerName}</p>

                    <p><b>📧 Email:</b>
                    ${calculation.email}</p>

                    <p><b>🌱 Crop:</b>
                    ${calculation.crop}</p>

                    <p><b>📐 Land Area:</b>
                    ${calculation.area} Acres</p>

                    <hr>

                    <h4>💰 Expenses</h4>

                    <p>Seed: ₹${calculation.seed}</p>

                    <p>Fertilizer: ₹${calculation.fertilizer}</p>

                    <p>Pesticide: ₹${calculation.pesticide}</p>

                    <p>Labour: ₹${calculation.labour}</p>

                    <p>Tractor / Machinery:
                    ₹${calculation.tractor}</p>

                    <p>Water / Electricity:
                    ₹${calculation.water}</p>

                    <p>Other Expenses:
                    ₹${calculation.other}</p>

                    <p>
                    <b>Total Expense:
                    ₹${calculation.totalExpense}</b>
                    </p>

                    <hr>

                    <h4>📦 Production & Sale</h4>

                    <p>
                    Production:
                    ${calculation.production} Quintal
                    </p>

                    <p>
                    Selling Price:
                    ₹${calculation.price} / Quintal
                    </p>

                    <p>
                    <b>Total Income:
                    ₹${calculation.totalIncome}</b>
                    </p>

                    <h3>
                    ${
                calculation.profitLoss >= 0
                    ? "✅ Profit: ₹" + calculation.profitLoss
                    : "❌ Loss: ₹" + Math.abs(calculation.profitLoss)
            }
                    </h3>

                </div>

            `;


            historyDiv.appendChild(item);
        });


    } catch (error) {

        console.error(error);

        document.getElementById("history").innerHTML =
            "<p>Unable to load history.</p>";
    }
}