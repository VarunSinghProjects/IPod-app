// handle menuButton to go back to previous menu(musicMenu/gameMenu/settingMenu)
import song1 from "./Audio/PlayDate.mp3"
import song3 from "./Audio/FakeASmile.mp3"
import song4 from "./Audio/BreakingTheRules.mp3"
import song2 from "./Audio/DirtyLittleSecret.mp3"

export const Data = {
    Menu: [
        {
            parentIndex: 0,
            name: "Cover Flow",
            icon: "https://cdn-icons-png.flaticon.com/512/1544/1544767.png"
        },
        {
            parentIndex: 1,
            name: "Music",
            icon: "https://cdn-icons-png.flaticon.com/128/2995/2995101.png"
        },
        {
            parentIndex: 2,
            name: "Games",
            icon: "https://cdn-icons-png.flaticon.com/128/10339/10339556.png"
        },
        {
            parentIndex: 3,
            name: "Setting",
            icon: "https://cdn-icons-png.flaticon.com/128/9218/9218716.png"
        },
    ],
    Music: [
        {
            parentIndex: 4,
            name: "Songs",
            icon: "https://cdn-icons-png.flaticon.com/128/7566/7566380.png"
        },
        {
            parentIndex: 5,
            name: "Albums",
            icon:"https://cdn-icons-png.flaticon.com/128/11285/11285475.png"
        },
        {
            parentIndex: 6,
            name: "Artists",
            icon: "https://cdn-icons-png.flaticon.com/128/9601/9601004.png"
        },
        {
            parentIndex: 7,
            name: "Playlists",
            icon: "https://cdn-icons-png.flaticon.com/128/4473/4473134.png"
        }
    ],
    Games: [
        {
            parentIndex: 2,
            name: "Cricket",
            icon: "https://cdn-icons-png.flaticon.com/128/7833/7833060.png"
        },
        {
            parentIndex: 2,
            name: "Temple Run",
            icon: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/f4b3ac7fe25cad9bc028b33f7a407f28.png"
        },
        {
            parentIndex: 2,
            name: "Candy Crush",
            icon: "https://cdn2.downdetector.com/static/uploads/logo/mzl.ehlcwpta.png"
        },
        {
            parentIndex: 2,
            name: "Car Race",
            icon: "https://cdn-icons-png.flaticon.com/128/7957/7957363.png"
        }
    ],
    Setting: [
        {
            parentIndex: 3,
            name: "Wallpaper",
            icon: "https://cdn-icons-png.flaticon.com/128/7993/7993902.png"
        },
        {
            parentIndex: 3,
            name: "Theme",
            icon: "https://cdn-icons-png.flaticon.com/128/10275/10275643.png"
        },
        {
            parentIndex: 3,
            name: "Date Time",
            icon: "https://cdn-icons-png.flaticon.com/128/10883/10883734.png"
        },
        {
            parentIndex: 3,
            name: "Language",
            icon: "https://cdn-icons-png.flaticon.com/128/9100/9100283.png"
        }
    ],
    Songs: [
        {
            parentIndex: 4,
            name: "Play Date",
            source: song1,
            duration: 178,
            icon: "https://img.youtube.com/vi/S602cG50QCw/maxresdefault.jpg"
        },
        {
            parentIndex: 4,
            name: "Fake A Smile",
            source: song2,
            duration: 168,
            icon: "https://www.thenocturnaltimes.com/wp-content/uploads/2021/02/alan-walker-and-salem-ilese.jpg"
        },
        {
            parentIndex: 4,
            name: "Breaking The Rules",
            source: song3,
            duration: 224,
            icon: "https://a10.gaanacdn.com/images/albums/91/4073591/crop_480x480_4073591.jpg"
        },
        {
            parentIndex: 4,
            name: "Dirty Little Secret",
            source: song4,
            duration: 183,
            icon: "https://c.saavncdn.com/490/Dirty-Little-Secret-English-2022-20220520114611-500x500.jpg"
        },
    ],
    Album: [
        {
            parentIndex: 5,
            name: "Hustle 2.0",
            icon: "https://a10.gaanacdn.com/gn_img/albums/0wrb4N3Lg7/rb4qEwXMKL/size_l.jpg"
        },
        {
            parentIndex: 5,
            name: "Filhall",
            icon: "https://m.media-amazon.com/images/M/MV5BZjRmNGYzMjEtMTJmYS00NTA1LWJjODEtYmI0NmQ0ZjRlNWUyXkEyXkFqcGdeQXVyMTI0NzQ5OTky._V1_QL75_UX190_CR0,24,190,190_.jpg"
        },
        {
            parentIndex: 5,
            name: "Rustom",
            icon: "https://i.pinimg.com/236x/f9/1d/7c/f91d7c8fbb86deb944e63459a0d0f23b--bollywood-news-bollywood-actors.jpg"
        },
        {
            parentIndex: 5,
            name: "Naah",
            icon: "https://upload.wikimedia.org/wikipedia/en/8/8a/Naah_Cover_Art.jpeg"
        }
    ],
    Artists: [
        {
            parentIndex: 6,
            name: "Arijit Singh",
            icon: "https://c.saavncdn.com/artists/Arijit_Singh_002_20230323062147_500x500.jpg"
        },
        {
            parentIndex: 6,
            name: "Honey Singh",
            icon: "https://c.saavncdn.com/artists/Yo_Yo_Honey_Singh_002_20221216102650_500x500.jpg"
        },
        {
            parentIndex: 6,
            name: "Badshah",
            icon: "https://c.saavncdn.com/artists/Badshah_005_20230608084021_500x500.jpg"
        },
        {
            parentIndex: 6,
            name: "Diljit Dosanjh",
            icon: "https://c.saavncdn.com/artists/Diljit_Dosanjh_004_20221006184535_500x500.jpg"
        }
    ],
    Playlists: [
        {
            parentIndex: 7,
            name: "Hustle 2.0",
            icon: "https://a10.gaanacdn.com/gn_img/albums/0wrb4N3Lg7/rb4qEwXMKL/size_l.jpg"
        },
        {
            parentIndex: 7,
            name: "Filhall",
            icon: "https://m.media-amazon.com/images/M/MV5BZjRmNGYzMjEtMTJmYS00NTA1LWJjODEtYmI0NmQ0ZjRlNWUyXkEyXkFqcGdeQXVyMTI0NzQ5OTky._V1_QL75_UX190_CR0,24,190,190_.jpg"
        },
        {
            parentIndex: 7,
            name: "Rustom",
            icon: "https://i.pinimg.com/236x/f9/1d/7c/f91d7c8fbb86deb944e63459a0d0f23b--bollywood-news-bollywood-actors.jpg"
        },
        {
            parentIndex: 7,
            name: "Naah",
            icon: "https://upload.wikimedia.org/wikipedia/en/8/8a/Naah_Cover_Art.jpeg"
        }
    ],
}
