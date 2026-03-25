
interface AudioPlayer {
    audioVolume: number,
    songDuration: number,
    song: string,
    details: Details,
}

interface Details {
    author: string,
    year: number
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed sheeran",
        year:2026
    }
}

const song = "SAO";

const {song:anotherSong, songDuration, details:{author, year}} = audioPlayer

console.log({anotherSong, songDuration, author, year})


const dbz: string[] = ["Goku", "Vegeta", "Trunks"]

const [personaje_1,personaje_2,personaje_3] = dbz

console.table({personaje_1,personaje_2,personaje_3})

export {}