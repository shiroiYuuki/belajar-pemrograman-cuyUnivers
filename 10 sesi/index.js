const mahasiswa = [
    {
        nama: "yuuki",
        sekolah: "SMC",
        jurusan: "penghamilan massal",
        usai: (233, "tahun")
    },
    {
        nama: "yuuki",
        sekolah: "SMC",
        jurusan: "penghamilan massal",
        usai: (234, "tahun")
    }
]

function getDetailData() {
    // mahasiswa.map(function (result, i) {
    //     console.table(result)
    // })
    mahasiswa.forEach(result => {
        console.log(result)
    })
}


// let i = 0
// let u = 0


// // stander function
// function getDetailHuman() {
//     i += 1
//     if(i > 5) {
//         console.log("anda sudah pakai 5x")
//     } else {
//         console.log(`jatah masih ada`)

//     }
// }

// // Arrow function

// const getDetailHuman2 = () => {
//     u += 1
//     u > 5 ? console.log('lebih dari 5x bro human 2') : console.log('jatah anda masih ada cuyyyy')
// } 