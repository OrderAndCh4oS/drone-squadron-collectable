const enemyQueue = [
    {
        'id': 27, 'seed': '974579b0-3f51-4473-8d1e-312466cedaf1', 'value': '0.667',
        'leader': 'Iaclite',
    },
    {
        'id': 89, 'seed': 'dad8a298-0d0f-4428-9f16-3fa4de945464', 'value': '0.674',
        'leader': 'Sephus',
    },
    {'id': 94, 'seed': 'b13ac22e-4672-48f2-a2be-f184a85742fb', 'value': '0.677', 'leader': 'Welia'},
    {
        'id': 68, 'seed': 'c32e9c71-05b5-4898-9e0c-73ae14f1de7e', 'value': '0.683',
        'leader': 'Woclite',
    },
    {
        'id': 29, 'seed': '85df9311-0ac7-4910-a21d-a58614a7ebac', 'value': '0.685',
        'leader': 'Qothea Mk XCIV',
    },
    {'id': 54, 'seed': 'cd5d6d35-e76f-4e5e-afb2-5be177d49a73', 'value': '0.689', 'leader': 'Womia'},
    {
        'id': 88, 'seed': 'bc2750e2-7d8d-4459-85d2-55f67997e966', 'value': '0.689',
        'leader': 'Yerilia',
    },
    {
        'id': 42, 'seed': '4c706207-ce59-462c-ab9a-6a1fe8625119', 'value': '0.692',
        'leader': 'Moyama',
    },
    {
        'id': 98, 'seed': '8b7ecab4-96a6-45a9-8278-3a0ebc9ffd4c', 'value': '0.695',
        'leader': 'Sopra v49.78',
    },
    {'id': 56, 'seed': '9b2c67b1-6b2d-43ea-88c9-6517620e1db0', 'value': '0.697', 'leader': 'Iaria'},
    {'id': 53, 'seed': 'b25b97b0-f235-498c-a85d-c83e6190935b', 'value': '0.698', 'leader': 'Iopra'},
    {'id': 10, 'seed': '5fc25ee9-92f3-4060-80df-fe8f2818388c', 'value': '0.699', 'leader': 'Caliv'},
    {'id': 8, 'seed': 'f5f7e1ba-670c-462b-a5f1-67daaba6c450', 'value': '0.700', 'leader': 'Pamia'},
    {
        'id': 11, 'seed': 'dbd2c9ae-3737-416d-9991-bcbf4872dcda', 'value': '0.701',
        'leader': 'Vozuno',
    },
    {'id': 12, 'seed': 'd2bc6373-ede4-4e6a-bc83-d37ab9526a1c', 'value': '0.701', 'leader': 'Jopra'},
    {
        'id': 69, 'seed': '38d0c9e9-723d-4488-a90b-7c120edfc4d3', 'value': '0.701',
        'leader': 'Buyama Mk XCVIII',
    },
    {'id': 17, 'seed': '689c7681-b822-4f35-ad16-0df98a3bc639', 'value': '0.703', 'leader': 'Warus'},
    {
        'id': 28, 'seed': '1d03a6e0-1204-45ee-a9f1-8d92327f61f1', 'value': '0.707',
        'leader': 'Qecury',
    },
    {'id': 55, 'seed': '31933386-e5d4-4e5c-a2e6-8923b83834f1', 'value': '0.707', 'leader': 'Rolia'},
    {
        'id': 73, 'seed': '58021583-b194-4244-8bba-6df34fc0272f', 'value': '0.708',
        'leader': 'Zevis v16.51',
    },
    {'id': 50, 'seed': '771f0d21-14a5-44d9-98e4-6f9b0cf4411c', 'value': '0.709', 'leader': 'Iutis'},
    {
        'id': 18, 'seed': '9035269c-7627-4f6e-8116-f5b379c009d5', 'value': '0.711',
        'leader': 'Xagawa',
    },
    {
        'id': 81, 'seed': '4cd2bcab-22c4-42ac-8b34-0f2b9e23d541', 'value': '0.712',
        'leader': 'Celiv Mk LXXVII',
    },
    {
        'id': 9, 'seed': '1ab25fd2-737e-4337-9bf3-db21906839a9', 'value': '0.714',
        'leader': 'Quruta Mk XCVIII',
    },
    {
        'id': 31, 'seed': '268008b7-7a8a-486b-a5a4-ffbf6cfb778f', 'value': '0.714',
        'leader': 'Iutis v2.27',
    },
    {'id': 65, 'seed': 'cd6ff788-ad60-476f-9461-18dc4dd0013a', 'value': '0.717', 'leader': 'Sebos'},
    {
        'id': 23, 'seed': 'bb19eb1e-79de-40df-83a6-f84d1aa8bd23', 'value': '0.718',
        'leader': 'Horuta',
    },
    {
        'id': 30, 'seed': '3952b417-11c4-4f26-aa0d-e82358cb9e30', 'value': '0.719',
        'leader': 'Begantu',
    },
    {'id': 37, 'seed': '1e6e5c21-9cf3-46cf-a428-d82ae0d0c9f7', 'value': '0.721', 'leader': 'Popra'},
    {
        'id': 95, 'seed': 'fe36fbe1-702a-4f42-99be-64540e47e4e9', 'value': '0.722',
        'leader': 'Rastea Mk XC',
    },
    {'id': 7, 'seed': 'f72578bb-0ccb-40ed-a2b1-019ba29feea8', 'value': '0.729', 'leader': 'Gulea'},
    {'id': 61, 'seed': 'ee7975c3-1c16-41e6-9ced-dcba10b5f419', 'value': '0.729', 'leader': 'Bania'},
    {
        'id': 83, 'seed': '5c1083ae-22d7-46d5-bebb-f982771cf260', 'value': '0.730',
        'leader': 'Weliv v7.12',
    },
    {
        'id': 4, 'seed': '0223808e-ab03-485a-a46e-a100031e1a99', 'value': '0.731',
        'leader': 'Capra v30.42',
    },
    {
        'id': 33, 'seed': 'cbcdf55b-68ca-4645-bf8a-2b1d5365932b', 'value': '0.731',
        'leader': 'Yenope',
    },
    {
        'id': 48, 'seed': '55981b76-6b0c-49ef-9596-6954fdda0cf6', 'value': '0.732',
        'leader': 'Cobos v3.99',
    },
    {
        'id': 19, 'seed': 'bef963e6-e485-4da2-b412-3324e94a357c', 'value': '0.734',
        'leader': 'Konides Mk XXIV',
    },
    {
        'id': 72, 'seed': 'da7fe292-7d8b-4dd3-b731-e4b92816d26d', 'value': '0.734',
        'leader': 'Hocarro',
    },
    {'id': 36, 'seed': '38dae15e-107f-44be-9a01-ce2ffc5d5faa', 'value': '0.736', 'leader': 'Hutov'},
    {'id': 60, 'seed': 'fec3c3e1-df03-4aad-a6e9-c296ce8cd82b', 'value': '0.736', 'leader': 'Betis'},
    {
        'id': 63, 'seed': '7d617af1-1edb-424e-9b50-fb9dbf21c207', 'value': '0.736',
        'leader': 'Mophus Mk LXVII',
    },
    {'id': 3, 'seed': 'c297d747-c48c-410f-9829-5875e4e6319f', 'value': '0.737', 'leader': 'Gotune'},
    {'id': 5, 'seed': '669c2288-faeb-40bf-b7ec-e60136e38590', 'value': '0.739', 'leader': 'Lonia'},
    {'id': 84, 'seed': 'efb84f68-7f01-49de-850c-2f652cd28c9b', 'value': '0.739', 'leader': 'Haliv'},
    {
        'id': 16, 'seed': '565a1a7c-3c54-42ec-b86a-e712a9d23ffb', 'value': '0.740',
        'leader': 'Kolia v40.65',
    },
    {
        'id': 66, 'seed': '8cd987a0-e129-4576-8203-b500e0b2abb5', 'value': '0.740',
        'leader': 'Lohines',
    },
    {
        'id': 70, 'seed': '8fb097f7-740b-47f1-949a-b4ceb6b54c02', 'value': '0.740',
        'leader': 'Qonope v5.65',
    },
    {
        'id': 86, 'seed': 'a4fbb0ea-f45c-4efe-a8db-3b9348540402', 'value': '0.741',
        'leader': 'Buruta',
    },
    {
        'id': 93, 'seed': 'a8de4e8c-473b-420b-ba5b-a690e9d85e3a', 'value': '0.742',
        'leader': 'Docarro',
    },
    {'id': 96, 'seed': '69f942b5-d49c-4886-8182-59201bcb8ea9', 'value': '0.742', 'leader': 'Qonia'},
    {
        'id': 99, 'seed': '91d35c05-e8a9-46d6-81c3-862400b95a42', 'value': '0.742',
        'leader': 'Menope',
    },
    {
        'id': 15, 'seed': 'b7b56cf4-ab37-4d91-aa42-cb4130f534f2', 'value': '0.743',
        'leader': 'Legawa',
    },
    {
        'id': 22, 'seed': 'f40aa728-cda1-42d0-8d24-44482be3cf2b', 'value': '0.743',
        'leader': 'Legantu v28.23',
    },
    {
        'id': 91, 'seed': '67b9b3d9-fb17-41eb-8b0f-c1a778cc0e11', 'value': '0.744',
        'leader': 'Qowei Mk XLVII',
    },
    {'id': 44, 'seed': '782fc057-8583-49d4-bf3f-0856cc24df35', 'value': '0.745', 'leader': 'Wupra'},
    {
        'id': 80, 'seed': '3467a352-bf26-4f08-9370-97649e4dac1e', 'value': '0.745',
        'leader': 'Laturn',
    },
    {
        'id': 71, 'seed': 'ca4573ec-9d45-4f30-919e-3bc15876bac7', 'value': '0.746',
        'leader': 'Fehines',
    },
    {'id': 79, 'seed': 'cc7e91ff-6805-42fa-8aad-caef3ab3bab8', 'value': '0.746', 'leader': 'Yoter'},
    {
        'id': 43, 'seed': '880994da-da53-4569-81f8-1ec3398d021c', 'value': '0.748',
        'leader': 'Rothea Mk IX',
    },
    {'id': 67, 'seed': '505145ad-68c8-4218-af50-a11f53419698', 'value': '0.748', 'leader': 'Vatov'},
    {
        'id': 62, 'seed': 'c72abe28-2446-4d96-b097-cb1038734e91', 'value': '0.751',
        'leader': 'Haruta Mk XCIV',
    },
    {'id': 14, 'seed': '606f1c4d-ea91-4f43-99bf-d094ec24b00e', 'value': '0.756', 'leader': 'Buvis'},
    {
        'id': 76, 'seed': '8872417c-129b-4049-963a-70f552c20fa0', 'value': '0.756',
        'leader': 'Kovis v19.69',
    },
    {
        'id': 20, 'seed': 'b64206a8-629a-4e34-b190-6b26845b3d12', 'value': '0.758',
        'leader': 'Lunope v43.51',
    },
    {
        'id': 64, 'seed': '57cfa064-e623-4002-8da8-f0b71ff32c3a', 'value': '0.759',
        'leader': 'Katania v40.39',
    },
    {
        'id': 58, 'seed': 'e7d7d341-9849-4979-b0ef-8d011aaad685', 'value': '0.760',
        'leader': 'Julara Mk LXXII',
    },
    {'id': 0, 'seed': '6f347f82-08a7-4c08-906f-e0a9252c6d3c', 'value': '0.762', 'leader': 'Funus'},
    {
        'id': 38, 'seed': '0da1545f-9483-488d-aee9-22da8ba1cdd5', 'value': '0.762',
        'leader': 'Tanus v13.86',
    },
    {
        'id': 85, 'seed': '35f9cd7a-bff7-47ca-831d-e95919876b7b', 'value': '0.762',
        'leader': 'Tocarro',
    },
    {
        'id': 52, 'seed': '9fab7800-57c8-4b04-9648-d3ba63d9ca1e', 'value': '0.763',
        'leader': 'Laturn',
    },
    {
        'id': 47, 'seed': 'd54c6e3b-0303-4a70-a27b-6f5e57decc2b', 'value': '0.764',
        'leader': 'Kecarro v28.49',
    },
    {'id': 49, 'seed': '269da2d5-f805-4174-9743-2ecd4b60dd14', 'value': '0.764', 'leader': 'Iaria'},
    {
        'id': 78, 'seed': '17272f02-b002-461e-bb37-d7610e6edbe0', 'value': '0.765',
        'leader': 'Tostea',
    },
    {'id': 1, 'seed': '8639671b-e32e-45b1-adbd-23597018f948', 'value': '0.767', 'leader': 'Taphus'},
    {'id': 25, 'seed': '68f26f5d-81a0-4f92-b336-e4e072cef837', 'value': '0.768', 'leader': 'Jenus'},
    {'id': 41, 'seed': 'c4b9280c-b78b-4d9e-a09f-e531a0a5954f', 'value': '0.768', 'leader': 'Qanus'},
    {'id': 32, 'seed': '1e00d49e-3663-49a7-93c1-093711c5b8d0', 'value': '0.770', 'leader': 'Pamia'},
    {
        'id': 40, 'seed': '5eb5e13e-4c73-4557-8646-251095d4cf64', 'value': '0.770',
        'leader': 'Justea',
    },
    {
        'id': 51, 'seed': 'ce1346d9-68f7-4f09-9e31-e91d96e4e472', 'value': '0.771',
        'leader': 'Metune',
    },
    {
        'id': 6, 'seed': '7b75c1fb-4915-4570-a51d-a0296d2459e5', 'value': '0.773',
        'leader': 'Nacury Mk XLIX',
    },
    {
        'id': 21, 'seed': 'be1cb53e-20b5-4d70-88dd-e022d3633a76', 'value': '0.773',
        'leader': 'Pania Mk LVI',
    },
    {
        'id': 87, 'seed': '3a942677-9e3b-4ca0-a047-4914d0092c66', 'value': '0.776',
        'leader': 'Rahiri',
    },
    {'id': 13, 'seed': 'b06f67cd-1cc5-415a-a9a4-5cb0901300d2', 'value': '0.779', 'leader': 'Relia'},
    {
        'id': 24, 'seed': '04d28286-3c9c-4270-b21b-0ca7bfe352ce', 'value': '0.782',
        'leader': 'Zelara',
    },
    {
        'id': 92, 'seed': 'f46e21bd-3189-4e25-9516-f9de8f440447', 'value': '0.784',
        'leader': 'Zotov v19.14',
    },
    {'id': 74, 'seed': 'ee2c69bc-ce2b-497c-a816-c426316076e2', 'value': '0.785', 'leader': 'Beliv'},
    {
        'id': 45, 'seed': 'e2e34681-7f26-4c3e-9fa9-72fef6d7644c', 'value': '0.787',
        'leader': 'Iunope',
    },
    {
        'id': 82, 'seed': '9556ae60-90d4-4c91-93bf-d3997fa17616', 'value': '0.788',
        'leader': 'Dostea',
    },
    {'id': 59, 'seed': '431c9acf-9a98-496c-aeaf-048a05f55b68', 'value': '0.793', 'leader': 'Bemia'},
    {
        'id': 90, 'seed': 'eae5a5fa-7496-4be6-b7bf-55aba2050319', 'value': '0.793',
        'leader': 'Dahiri',
    },
    {'id': 75, 'seed': '11404123-bc7d-4eb3-99d7-e3a807a36d64', 'value': '0.795', 'leader': 'Xunov'},
    {
        'id': 2, 'seed': '2f8fdc06-e1d6-400a-a471-4dcaee585e4d', 'value': '0.797',
        'leader': 'Macarro',
    },
    {'id': 57, 'seed': 'ac8a2820-b71e-4c8b-8014-7b635ed48bbe', 'value': '0.799', 'leader': 'Monus'},
    {'id': 77, 'seed': 'c60ad304-b61f-4074-b83e-959d354f15d1', 'value': '0.807', 'leader': 'Ceter'},
    {
        'id': 39, 'seed': '7bb15e65-bc85-4bcc-a153-03ba9be509c2', 'value': '0.808',
        'leader': 'Zetune Mk XII',
    },
    {
        'id': 97, 'seed': 'be101217-c084-4a90-8dea-034ff5eff151', 'value': '0.816',
        'leader': 'Rorilia v19.68',
    },
    {'id': 26, 'seed': '7d94918e-a750-4bca-b06b-c4ab85f53633', 'value': '0.840', 'leader': 'Woter'},
    {
        'id': 35, 'seed': '91c5a1fc-a61a-4e41-a860-93d6ec3713dc', 'value': '0.843',
        'leader': 'Noturn',
    },
    {
        'id': 34, 'seed': '22575014-0e56-4f36-930f-a302ddfb5980', 'value': '0.845',
        'leader': 'Ranope',
    },
    {
        'id': 46, 'seed': '69e7183d-3975-49b9-9af6-d6793e9a131a', 'value': '0.851',
        'leader': 'Dewei Mk LXIX',
    }];

export default enemyQueue;
