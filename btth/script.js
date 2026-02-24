const squad = [
    ["Nguyen Van A", 10, "FW"],
    ["Tran Van B", 5, "MF"],
    ["Le Van C", 2, "DF"],
    ["Pham Van D", 12, "FW"],
    ["Hoang Van E", 0, "GK"],
    ["Dang Van F", 7, "MF"]
];
do {
    prompt(`
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
            break;
        case 2:

            break;
        case 3:

            break;
        case 4:

            break;
        case 5:

            break;
        case 0: 

            break;
        default:
            break;
    }
} while (choice !== 0);

// Chức năng 1: Xem danh sách cầu thủ (Sử dụng map hoặc forEach)
// - In ra danh sách toàn bộ đội bóng.
// - Định dạng in: "Tên (Vị trí): ... bàn thắng".

const displayListPerson = (listPerson) => {
    listPerson.forEach((item) => {
        console.log(`${item[0]} ${item[2]} ${item[1]} Bàn thắng`);
    });
}
displayListPerson(squad);
const findPerson = (find) => {
    prompt("Nhập tên cầu thủ cần tìm: ");
    find.find((item) => {
        if(find.find() !== 0){
            console.log(`${item[0]} ${item[2]} ${item[1]} Bàn thắng`);
        } else {
            console.log("Lỗi");
        }
    });
}
const filerPerson = (filter) => {
    prompt("Nhập vị trí cần lọc (FW, MF, DF, Gk)");
    filter.filter(item)
}