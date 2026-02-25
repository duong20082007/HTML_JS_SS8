const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];

const displayListPerson = (listPerson) => {
    listPerson.forEach((player) => {
        console.log(`${player[0]} (${player[2]}): ${player[1]} Bàn thắng`);
    });
};

const findPlayer = (namePlayer, listPlayer) => {
    let findUser = listPlayer.find((player) => {
        return player[0].toLowerCase().includes(namePlayer.toLowerCase().trim());
    });
    if (!findUser) {
        console.log("Không tìm thấy cầu thủ bạn muốn");
    } else {
        console.log(`${findUser[0]} (${findUser[2]}): ${findUser[1]} Bàn thắng`);
    }
};

const filterPlayerByPosition = (searchPositionPlayer, listPlayer) => {
    let findListUser = listPlayer.filter((player) => {
        return player[2].toLowerCase().includes(searchPositionPlayer.toLowerCase().trim());
    });
    if (findListUser.length === 0) {
        console.log("Không tìm thấy vị trí yêu cầu");
    } else {
        displayListPerson(findListUser);
    }
};

const handleTotalGoal = (listPlayer) => {
    const sum = listPlayer.reduce((acc, cur) => {
        return acc + cur[1]; 
    }, 0);
    console.log(`Tổng số bàn thắng hiện tại là: ${sum}`);
};

const performa = (listPlayer) => {
    let isDone = listPlayer.some((player) => {
        return player[1] === 0; 
    });
    if (isDone === true) {
        console.log("Có cầu thủ chưa ghi bàn");
    }

    let allScored = listPlayer.every((player) => {
        return player[1] > 0;
    });
    if (allScored === true) {
        console.log("Tất cả cầu thủ đều đã ghi bàn");
    }
};

let choice;
do {
    choice = +prompt(`
        --- QUẢN LÝ ĐỘI BÓNG ---
        1. Xem danh sách
        2. Tìm kiếm (Find)
        3. Lọc vị trí (Filter)
        4. Tổng bàn thắng (Reduce)
        5. Kiểm tra hiệu suất (Some/Every)
        0. Thoát
    `);

    switch (choice) {
        case 1:
            displayListPerson(squad);
            break;
        case 2:
            let searchName = prompt("Mời bạn nhập tên cầu thủ");
            findPlayer(searchName, squad);
            break;
        case 3:
            let searchPosition = prompt("Mời bạn nhập vị trí");
            filterPlayerByPosition(searchPosition, squad); 
            break;
        case 4:
            handleTotalGoal(squad);
            break;
        case 5:
            performa(squad);
            break;
        case 0: 
            console.log("Tạm biệt");
            break;
        default:
            console.log("Lựa chọn không hợp lệ");
            break;
    }
} while (choice !== 0);