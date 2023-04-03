const input221212_2 = [
    {
        _id: "639767b7a889387682fbdc3f",
        name: "Reed Rosales",
        gender: "male",
        birthday: "1984-05-08",
        company: "TYPHONICA",
        email: "reedrosales@typhonica.com",
        phone: "+1 (992) 465-3684",
    },
    {
        _id: "639767b71c119cab969e675e",
        name: "Whitfield Cruz",
        gender: "male",
        birthday: "1981-05-26",
        company: "INDEXIA",
        email: "whitfieldcruz@indexia.com",
        phone: "+1 (822) 419-3684",
    },
    {
        _id: "639767b7a0cdb51c558ee42e",
        name: "Anastasia Roy",
        gender: "female",
        birthday: "1988-02-19",
        company: "NEWCUBE",
        email: "anastasiaroy@newcube.com",
        phone: "+1 (996) 438-2895",
    },
    {
        _id: "639767b71352eb56cfd5fc34",
        name: "Hardy Burns",
        gender: "male",
        birthday: "1980-12-04",
        company: "EGYPTO",
        email: "hardyburns@egypto.com",
        phone: "+1 (971) 508-3552",
    },
    {
        _id: "639767b713e5b48fee3be64f",
        name: "Holcomb Herring",
        gender: "male",
        birthday: "2001-08-05",
        company: "EXOPLODE",
        email: "holcombherring@exoplode.com",
        phone: "+1 (824) 457-2159",
    },
];

// Write a function to index items in the array by birth month
// Array may get longer
function indexByBirthMonth(input) {
    let result = {};

    for (let i = 0; i < input.length; i++) {
        const birthMonth = input[i].birthday.split("").splice(5, 2).join("");
        if (Object.hasOwn(result, birthMonth)) {
            result[birthMonth].push(input[i]);
        } else {
            result[birthMonth] = [input[i]];
        }
        console.log("result", result);
    }

    //그럼 새로운 {}안에
    //그 birthmonth가 있으면 그 []안에 push로 해당 {}를 넣고
    //그 birthmonth가 없으면 그 birth month를 아이디로 주고
    //새로운 []를 열어서 그 안에 {}를 push로 넣어준다
    return result;
}

indexByBirthMonth(input221212_2);
/** Expected Output
 {
  "12": [
    {
      "_id": "639767b71352eb56cfd5fc34",
      "name": "Hardy Burns",
      "gender": "male",
      "birthday": "1980-12-04",
      "company": "EGYPTO",
      "email": "hardyburns@egypto.com",
      "phone": "+1 (971) 508-3552"
    }
  ],
  "05": [
    {
      "_id": "639767b7a889387682fbdc3f",
      "name": "Reed Rosales",
      "gender": "male",
      "birthday": "1984-05-08",
      "company": "TYPHONICA",
      "email": "reedrosales@typhonica.com",
      "phone": "+1 (992) 465-3684"
    },
    {
      "_id": "639767b71c119cab969e675e",
      "name": "Whitfield Cruz",
      "gender": "male",
      "birthday": "1981-05-26",
      "company": "INDEXIA",
      "email": "whitfieldcruz@indexia.com",
      "phone": "+1 (822) 419-3684"
    }
  ],
  "02": [
    {
      "_id": "639767b7a0cdb51c558ee42e",
      "name": "Anastasia Roy",
      "gender": "female",
      "birthday": "1988-02-19",
      "company": "NEWCUBE",
      "email": "anastasiaroy@newcube.com",
      "phone": "+1 (996) 438-2895"
    }
  ],
  "08": [
    {
      "_id": "639767b713e5b48fee3be64f",
      "name": "Holcomb Herring",
      "gender": "male",
      "birthday": "2001-08-05",
      "company": "EXOPLODE",
      "email": "holcombherring@exoplode.com",
      "phone": "+1 (824) 457-2159"
    }
  ]
}
 */
