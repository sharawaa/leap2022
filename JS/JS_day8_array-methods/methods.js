/*Дурын String авахад тухайн string нь зөв РД мөн эсэхийг шалгадаг isCorrectReg(register) функц бич. 
Хэрэв зөв бол тухайн РД аас хүйс авдаг getGender(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. / 
РД аас төрсөн өдөр авдаг getBirthDay(register) функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /
РД аас төрсөн аймгийг олдог getBirthRegion(register)  функц бич / Хэрэв буруу РД байвал буруу байна гэж хэвлэнэ. /
Дээрх бүх утгыг хэвлэдэг getRegisterInfo(register) функц бичнэ үү. */




let useg = ["А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ж",
    "З",
    "И",
    "Й",
   " К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Ф",
    "Х",
    "У"];

    const register = ("ру00251110");
    

    function isCorrectReg(register){
        if(useg.includes(register[0].toUpperCase()) && useg.includes(register[1].toUpperCase()) && Number.isInteger(Number(register.slice(2, 10))) && register.length == 10){
               console.log("zuv baina");
            return "zuv bna"
        }
        else{
            console.log("rd buruu bna");
            return "buruu bna"
        }
    }
    
isCorrectReg(register)


function getBirthDay(register){
    if(register.slice(6, 8)){
        return "tursun"
    }
    
}

getBirthDay(register)