#!/usr/bin/env node

//what movies
//what timings - (any day)
//seats available - (any day)
//book = name - date - screen - time - seats  

// json-server global - json-server --watch database.json

import inquirer from 'inquirer';
import moment from 'moment';
import fetch from 'node-fetch';
import { createSpinner } from 'nanospinner';
import { program, Option } from 'commander';
import chalk from 'chalk';
import figlet from 'figlet';

const GetMovies = async () => {
    let today = (moment()).format('dddd');
    const todayMoviesResponse = await fetch('http://localhost:3000/' + today);
    const todayMoviesData = await todayMoviesResponse.json();
    let movieNames = [];
    todayMoviesData.forEach(x => movieNames.push({
        name: x.movie,
        value: x.movie + " (" + x.id + ")"
    }));
    return movieNames;
}

const MovieCodesForHelp = async () => {
    let movieCodesHelp = await GetMovies();
    let stringCodes = 'MOVIES'
    movieCodesHelp.forEach(x => {
        let movieId = (x.value).slice(
            (x.value).indexOf('(') + 1,
            (x.value).lastIndexOf(')'),
        );
        stringCodes = stringCodes + "\n  " + movieId + "  " + x.name
    })
    return stringCodes;
}

const GetMovieCodes = async () => {
    let today = (moment()).format('dddd');
    const todayMoviesResponse = await fetch('http://localhost:3000/' + today);
    const todayMoviesData = await todayMoviesResponse.json();
    let movieCodes = [];
    todayMoviesData.forEach(x => movieCodes.push(x.id));
    return movieCodes;
}

const GetDays = () => {
    let todayDate = (moment()).format('MMM D, YYYY');
    let today = (moment()).format('dddd');
    let days = [{
        name: todayDate + " (Today)",
        value: todayDate + " (" + today + ")",
        short: todayDate + " (" + today + ")"
    }]
    let count = 1
    while (true) {
        let toPushDate = (moment().add(count, 'days')).format('MMM D, YYYY');
        let toPushDay = (moment().add(count, 'days')).format('dddd');
        if (toPushDay !== "Friday") {
            days.push(toPushDate + " (" + toPushDay + ")")
            count = count + 1
        }
        else {
            days.push(new inquirer.Separator())
            days.push('Back')
            days.push('Back to movie selection')
            days.push(new inquirer.Separator())
            return days
        }
    }
}

const GetDayCodes = () => {
    let todayDate = (moment()).format('MM/DD');
    let days = [todayDate]
    let count = 1
    while (true) {
        let toPushDate = (moment().add(count, 'days')).format('MM/DD');
        let toPushDay = (moment().add(count, 'days')).format('dddd');
        if (toPushDay !== "Friday") {
            days.push(toPushDate)
            count = count + 1
        }
        else {
            return days
        }
    }
}

const GetSeatCodes = () => {
    return [
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a7",
        "a8",
        "a9",
        "a10",
        "a11",
        "a12",
        "a13",
        "a14",
        "a15",
        "a16",
        "a17",
        "a18",
        "a19",
        "a20",
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "b10",
        "b11",
        "b12",
        "b13",
        "b14",
        "b15",
        "b16",
        "b17",
        "b18",
        "b19",
        "b20",
        "c1",
        "c2",
        "c3",
        "c4",
        "c5",
        "c6",
        "c7",
        "c8",
        "c9",
        "c10",
        "c11",
        "c12",
        "c13",
        "c14",
        "c15",
        "c16",
        "c17",
        "c18",
        "c19",
        "c20",
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6",
        "d7",
        "d8",
        "d9",
        "d10",
        "d11",
        "d12",
        "d13",
        "d14",
        "d15",
        "d16",
        "d17",
        "d18",
        "d19",
        "d20",
        "e1",
        "e2",
        "e3",
        "e4",
        "e5",
        "e6",
        "e7",
        "e8",
        "e9",
        "e10",
        "e11",
        "e12",
        "e13",
        "e14",
        "e15",
        "e16",
        "e17",
        "e18",
        "e19",
        "e20",
        "f1",
        "f2",
        "f3",
        "f4",
        "f5",
        "f6",
        "f7",
        "f8",
        "f9",
        "f10",
        "f11",
        "f12",
        "f13",
        "f14",
        "f15",
        "f16",
        "f17",
        "f18",
        "f19",
        "f20",
        "g1",
        "g2",
        "g3",
        "g4",
        "g5",
        "g6",
        "g7",
        "g8",
        "g9",
        "g10",
        "g11",
        "g12",
        "g13",
        "g14",
        "g15",
        "g16",
        "g17",
        "g18",
        "g19",
        "g20",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "h7",
        "h8",
        "h9",
        "h10",
        "h11",
        "h12",
        "h13",
        "h14",
        "h15",
        "h16",
        "h17",
        "h18",
        "h19",
        "h20",
        "i1",
        "i2",
        "i3",
        "i4",
        "i5",
        "i6",
        "i7",
        "i8",
        "i9",
        "i10",
        "i11",
        "i12",
        "i13",
        "i14",
        "i15",
        "i16",
        "i17",
        "i18",
        "i19",
        "i20"
    ]
}

const GetSeatCodesBySeating = () => {
    return {
        "Balcony": [
            "a1",
            "a2",
            "a3",
            "a4",
            "a5",
            "a6",
            "a7",
            "a8",
            "a9",
            "a10",
            "a11",
            "a12",
            "a13",
            "a14",
            "a15",
            "a16",
            "a17",
            "a18",
            "a19",
            "a20",
            "b1",
            "b2",
            "b3",
            "b4",
            "b5",
            "b6",
            "b7",
            "b8",
            "b9",
            "b10",
            "b11",
            "b12",
            "b13",
            "b14",
            "b15",
            "b16",
            "b17",
            "b18",
            "b19",
            "b20",
            "c1",
            "c2",
            "c3",
            "c4",
            "c5",
            "c6",
            "c7",
            "c8",
            "c9",
            "c10",
            "c11",
            "c12",
            "c13",
            "c14",
            "c15",
            "c16",
            "c17",
            "c18",
            "c19",
            "c20"],
        "Mezzanine": [
            "d1",
            "d2",
            "d3",
            "d4",
            "d5",
            "d6",
            "d7",
            "d8",
            "d9",
            "d10",
            "d11",
            "d12",
            "d13",
            "d14",
            "d15",
            "d16",
            "d17",
            "d18",
            "d19",
            "d20",
            "e1",
            "e2",
            "e3",
            "e4",
            "e5",
            "e6",
            "e7",
            "e8",
            "e9",
            "e10",
            "e11",
            "e12",
            "e13",
            "e14",
            "e15",
            "e16",
            "e17",
            "e18",
            "e19",
            "e20",
            "f1",
            "f2",
            "f3",
            "f4",
            "f5",
            "f6",
            "f7",
            "f8",
            "f9",
            "f10",
            "f11",
            "f12",
            "f13",
            "f14",
            "f15",
            "f16",
            "f17",
            "f18",
            "f19",
            "f20"],
        "Front": [
            "g1",
            "g2",
            "g3",
            "g4",
            "g5",
            "g6",
            "g7",
            "g8",
            "g9",
            "g10",
            "g11",
            "g12",
            "g13",
            "g14",
            "g15",
            "g16",
            "g17",
            "g18",
            "g19",
            "g20",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "h7",
            "h8",
            "h9",
            "h10",
            "h11",
            "h12",
            "h13",
            "h14",
            "h15",
            "h16",
            "h17",
            "h18",
            "h19",
            "h20",
            "i1",
            "i2",
            "i3",
            "i4",
            "i5",
            "i6",
            "i7",
            "i8",
            "i9",
            "i10",
            "i11",
            "i12",
            "i13",
            "i14",
            "i15",
            "i16",
            "i17",
            "i18",
            "i19",
            "i20"]
    }
}

const GetMovieData = async (movie_arg, day_arg) => {

    let dayOfWeek = day_arg.slice(
        day_arg.indexOf('(') + 1,
        day_arg.lastIndexOf(')'),
    );

    let movieId = movie_arg.slice(
        movie_arg.indexOf('(') + 1,
        movie_arg.lastIndexOf(')'),
    );

    const moviesResponse = await fetch('http://localhost:3000/' + dayOfWeek + "/" + movieId);
    let moviesData = await moviesResponse.json();

    return moviesData;
}

const GetMovieName = async (movie_arg) => {

    let today = (moment()).format('dddd');
    const moviesResponse = await fetch('http://localhost:3000/' + today + "/" + movie_arg);
    let moviesData = await moviesResponse.json();

    return moviesData.movie;
}

const GetScreens = async (movie_arg, day_arg, show_arg) => {

    const moviesData = await GetMovieData(movie_arg, day_arg);
    const movieShows = moviesData.shows;
    let movieScreens = [];
    movieShows.forEach(x => {
        if (x.show === show_arg) {
            movieScreens.push(x.screen);
        }
    }
    );
    movieScreens.push(new inquirer.Separator())
    movieScreens.push('Back')
    movieScreens.push('Back to movie selection')
    movieScreens.push(new inquirer.Separator())
    return movieScreens;

}

const WrongScreen = async (movie_arg, day_arg, screen_arg) => {

    const moviesData = await GetMovieData(movie_arg, day_arg);
    const movieShows = moviesData.shows;
    let flag = true;
    await movieShows.forEach(x => {
        if (x.screen === screen_arg) {
            flag = false;
        }
    });
    return flag;

}

const GetShowTimings = async (movie_arg, day_arg, screen_arg) => {

    const moviesData = await GetMovieData(movie_arg, day_arg);
    const movieShows = moviesData.shows;
    let movieShowTimes = [];
    movieShows.forEach(x => {
        if (!(movieShowTimes.includes(x.show))) {
            movieShowTimes.push(x.show);
        }
    }
    );
    movieShowTimes.push(new inquirer.Separator())
    movieShowTimes.push('Back')
    movieShowTimes.push('Back to movie selection')
    movieShowTimes.push(new inquirer.Separator())
    return movieShowTimes;
}

const WrongShow = async (movie_arg, day_arg, screen_arg, show_arg) => {

    const moviesData = await GetMovieData(movie_arg, day_arg);
    const movieShows = moviesData.shows;
    let flag = true;
    await movieShows.forEach(x => {
        if (x.screen === screen_arg && x.show === show_arg) {
            flag = false;
        }
    });
    return flag;

}

const GetMovieDetails = async (movie_arg) => {
    let todayDate = (moment()).format('MMM D, YYYY');
    let today = (moment()).format('dddd');
    const moviesData = await GetMovieData(movie_arg, todayDate + " (" + today + ")");
    const movieShows = moviesData.shows;
    let movieScreensShows = [];
    movieShows.forEach(x => {
        if (movieScreensShows[(x.screen).replace('Screen ', 's')]) {
            movieScreensShows[(x.screen).replace('Screen ', 's')] = movieScreensShows[(x.screen).replace('Screen ', 's')] + ', ' + (x.show).replace(':00 PM', '')
        }
        else {
            movieScreensShows[(x.screen).replace('Screen ', 's')] = (x.show).replace(':00 PM', '')
        }
    }
    );
    console.log(chalk.bold(`Screen (sc)  |   Show-timing (st)`));
    console.log(chalk.bold(`=============|===================`));
    for (let i = 0; i < 4; i++) {
        if (movieScreensShows['s' + i])
            console.log((`     s${i}      |     ${movieScreensShows['s' + i]}`));
    }
}

const GetSeats = async (movie_arg, day_arg, screen_arg, show_arg, seating_arg) => {

    const moviesData = await GetMovieData(movie_arg, day_arg);
    const movieShows = moviesData.shows;
    let movieSeats = [];
    movieShows.forEach(x => {
        if (x.screen === screen_arg && x.show === show_arg) {
            if (seating_arg === 'Balcony') {
                movieSeats = (x.available).filter(y => y.startsWith("A") || y.startsWith("B") || y.startsWith("C"));
            }
            else if (seating_arg === 'Mezzanine') {
                movieSeats = (x.available).filter(y => y.startsWith("D") || y.startsWith("E") || y.startsWith("F"))
            }
            else {
                movieSeats = (x.available).filter(y => y.startsWith("G") || y.startsWith("H") || y.startsWith("I"))
            }
        }
    }
    );
    movieSeats.push(new inquirer.Separator())
    movieSeats.push('Back')
    movieSeats.push('Back to movie selection')
    movieSeats.push(new inquirer.Separator())
    return movieSeats;
}

const BookSeats = async (movie_arg, day_arg, screen_arg, show_arg, seats_arg) => {

    const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

    console.log('\n')

    const spinnerProceed = createSpinner('Proceed with payment to confirm the booking...\n').start()
    await sleep();
    spinnerProceed.stop();
    spinnerProceed.clear();

    const spinnerProcess = createSpinner('Processing the payment...\n').start()
    await sleep();

    //api start

    let moviesData = await GetMovieData(movie_arg, day_arg);
    let movieShows = moviesData.shows;

    movieShows.forEach(x => {
        if (x.screen === screen_arg && x.show === show_arg) {

            let available = (x.available).filter(y => {
                return seats_arg.indexOf(y) === -1;
            });

            x.available = available;
            x.reserved = [...seats_arg];
        }
    });

    moviesData.shows = [...movieShows]

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(moviesData)
    };

    let dayOfWeek = day_arg.slice(
        day_arg.indexOf('(') + 1,
        day_arg.lastIndexOf(')'),
    );

    let movieId = movie_arg.slice(
        movie_arg.indexOf('(') + 1,
        movie_arg.lastIndexOf(')'),
    );

    const response = await fetch('http://localhost:3000/' + dayOfWeek + "/" + movieId, requestOptions);
    const data = await response.json();

    //api end
    spinnerProcess.success({ text: 'Payment successful!\n' })
    let ticketDetails = {
        movie: (movie_arg.split(" ("))[0], day: day_arg, screen: screen_arg, showTime: show_arg, seats: seats_arg.join(', ')
    }

    let movieSplit = (ticketDetails.movie).split(': ')
    console.log(figlet.textSync((movieSplit[0]).toUpperCase(), {
        font: 'ANSI Shadow',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
    }));
    if (movieSplit[1]) {
        console.log(figlet.textSync(movieSplit[1], {
            font: 'Doom',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }));
    }
    console.log(`${ticketDetails.showTime} | ${ticketDetails.day} 

    ${chalk.bold(ticketDetails.screen)} - ${chalk.inverse(" " + ticketDetails.seats + " ")}
    `)
}

const BookingMenu = async () => {

    let movie = ''
    let day = ''
    let screen = ''
    let show = ''
    let seating = ''
    let seats = []
    let confirm = ''

    let details = []
    let stepCount = 0

    console.log(figlet.textSync('WELCOME TO', {
        font: 'Doom',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    }));
    console.log(figlet.textSync('IMAX', {
        font: 'Doh',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: true
    }));

    const startBooking = async (step) => {
        switch (step) {
            case 0: {
                console.log('');
                const responseMovies = await inquirer.prompt({
                    type: 'list',
                    name: 'movie',
                    message: 'Select a movie to book tickets for',
                    choices: await GetMovies(),
                    filter(val) {
                        movie = val;
                        if (details[step]) {
                            details[step] = val;
                        }
                        else {
                            details.push(val);
                        }
                        return movie;
                    }
                });
                break;
            }
            case 1: {
                console.log('');
                const responseDays = await inquirer.prompt({
                    type: 'list',
                    name: 'day',
                    message: "Choose the day",
                    choices: GetDays(),
                    async filter(val) {
                        day = val;
                        if (details[step]) {
                            details[step] = val;
                        }
                        else {
                            details.push(val);
                        }
                        return day;
                    }
                });
                break;
            }
            case 2: {
                console.log('');
                const responseShows = await inquirer.prompt({
                    type: 'list',
                    name: 'show',
                    message: "Select a show timing",
                    choices: await GetShowTimings(movie, day),
                    async filter(val) {
                        show = val;
                        if (details[step]) {
                            details[step] = val;
                        }
                        else {
                            details.push(val);
                        }
                        return show;
                    }
                });
                break;
            }
            case 3: {
                console.log('');
                const responseScreen = await inquirer.prompt({
                    type: 'list',
                    name: 'screen',
                    message: "Choose the screen",
                    choices: await GetScreens(movie, day, show),
                    async filter(val) {
                        screen = val;
                        if (details[step]) {
                            details[step] = val;
                        }
                        else {
                            details.push(val);
                        }
                        return screen;
                    }
                });
                break;
            }
            case 4: {
                console.log('');
                const responseSeating = await inquirer.prompt({
                    type: 'list',
                    name: 'seating',
                    message: "Select a seating area",
                    choices: ['Balcony', 'Mezzanine', 'Front', new inquirer.Separator(), 'Back', 'Back to movie selection'],
                    async filter(val) {
                        seating = val;
                        if (details[step]) {
                            details[step] = val;
                        }
                        else {
                            details.push(val);
                        }
                        return seating;
                    }
                });
                break;
            }
            case 5: {
                console.log('');
                const responseSeats = await inquirer.prompt({
                    type: 'checkbox',
                    name: 'seats',
                    message: "Select the seat(s)",
                    choices: await GetSeats(movie, day, screen, show, seating),
                    filter(val) {
                        seats = val;
                        if (details[step]) {
                            details[step] = val.join(', ');
                        }
                        else {
                            details.push(val.join(', '));
                        }
                        return seats;
                    },
                    validate(val) {
                        if (val.length < 1) {
                            return 'You must choose at least one seat.';
                        }
                        return true;
                    }
                });
                break;
            }
            case 6: {
                console.log('');
                const responseConfirm = await inquirer.prompt({
                    type: 'list',
                    name: 'confirmation',
                    message: "You have selected " + seats.length + " seat(s) [" + seats.join(", ") + "], do you want to change the seating?",
                    choices: ['No', 'Yes'],
                    async filter(val) {
                        confirm = val
                        if (details[step]) {
                            details[step] = val;
                        }
                        else {
                            details.push(val);
                        }
                        return confirm;
                    }
                });
                break;
            }
        }
    }


    while (stepCount < 7) {
        await startBooking(stepCount);
        if ((details[stepCount]).includes("Back to movie selection") && stepCount > 0) {
            stepCount = 0;
        }
        else if ((details[stepCount]).includes("Back") && stepCount > 0) {
            stepCount = stepCount - 1;
        }
        else if (details[stepCount] === "Yes" && stepCount === 6) {
            stepCount = 4;
        }
        else {
            stepCount = stepCount + 1;
        }
    }

    if (stepCount === 7) {
        await BookSeats(movie, day, screen, show, seats)
    }
}

const errorColor = (str) => {
    // Add ANSI escape codes to display text in red.
    return chalk.red(str);
}

const warningColor = (str) => {
    // Add ANSI escape codes to display text in red.
    return chalk.yellow(str);
}

const successColor = (str) => {
    // Add ANSI escape codes to display text in red.
    return chalk.green(str);
}

program
    .command('booking-menu')
    .alias('bm')
    .description('Ticket booking menu')
    .action(async () => {
        await BookingMenu();
    });

program
    .command('booking')
    .alias('b')
    .description('Ticket booking CLI')
    .addOption(new Option('-mc, --movie <code>', 'movie code').choices(await GetMovieCodes()).makeOptionMandatory())
    .addOption(new Option('-dt, --show-date <day-month>', 'day of the show in (MM/DD)').choices(await GetDayCodes()).default((moment()).format('MM/DD'), "today's date"))
    .addOption(new Option('-sc, --screen <code>', 'screen code').choices(['s1', 's2', 's3']).makeOptionMandatory())
    .addOption(new Option('-st, --show-time <code>', 'show-timing code').choices(['1', '4', '7', '10']).makeOptionMandatory())
    .addOption(new Option('-sa, --seating <area>', 'seating area').choices(['balcony', 'mezzanine', 'front']).makeOptionMandatory())
    .addOption(new Option('-sn, --seats <numbers...>', 'seats chosen').choices(GetSeatCodes()))
    .action(async (options) => {
        let movie = ''
        let day = ''
        let screen = ''
        let show = ''
        let seating = ''
        let seats = []

        movie = await GetMovieName(options.movie);
        movie = movie + " (" + options.movie + ")";

        day = (moment(new Date(options.showDate + '/2022'))).format('MMM D, YYYY');
        day = day + " (" + (moment(new Date(options.showDate + '/2022'))).format('dddd') + ")";

        screen = (options.screen).replace('s', 'Screen ')

        show = (options.showTime) + ':00 PM'

        seating = (options.seating).charAt(0).toUpperCase() + (options.seating).slice(1)

        if (await WrongScreen(movie, day, screen)) {
            console.log('\n[WRN] ' + warningColor(`warning: option '-sc, --screen <code>' argument '${options.screen}' is invalid. Try again entering valid screen for the movie.`))
            console.log(`\nBelow are available screens & shows for '${movie.split(" (")[0]}' \n`)
            await GetMovieDetails(movie)
        }
        else {
            if (await WrongShow(movie, day, screen, show)) {
                console.log('\n[WRN] ' + warningColor(`warning: option '-st, --show-time <code>' argument '${options.showTime}' is invalid. Try again entering valid show with respective to the screen, for the movie.`))
                console.log(`\nBelow are available screens & shows for '${movie.split(" (")[0]}' \n`)
                await GetMovieDetails(movie)
            }
            else {

                let availableSeats = await GetSeats(movie, day, screen, show, seating)
                availableSeats = availableSeats.map(x => {
                    if (x.length <= 3) return x.toLowerCase();
                });
                availableSeats = availableSeats.filter(x => {
                    return x !== undefined;
                });

                if (options.seats) seats = options.seats;
                let wrongSeats = (seats).some(y => {
                    return ((availableSeats).indexOf(y) === -1);
                });

                let upperSeats = seats.map(x => {
                    return x.toUpperCase();
                });

                if (!wrongSeats && seats.length > 0) {
                    console.log(figlet.textSync('WELCOME TO', {
                        font: 'Doom',
                        horizontalLayout: 'default',
                        verticalLayout: 'default',
                        width: 100,
                        whitespaceBreak: true
                    }));
                    console.log(figlet.textSync('IMAX', {
                        font: 'Doh',
                        horizontalLayout: 'default',
                        verticalLayout: 'default',
                        width: 100,
                        whitespaceBreak: true
                    }));
                    await BookSeats(movie, day, screen, show, upperSeats)
                }
                else {
                    if (availableSeats.length > 0) {
                        console.log('\n[WRN] ' + warningColor(`warning: option '-sn, --seats <numbers...>' argument '${seats.join(", ")}' is invalid. Try again entering valid seats`));
                        console.log(`\nBelow are available seats (highlighted in green) for '${movie.split(" (")[0]}' on ${day} for ${show} show in ${screen} (${seating} area)\n`)

                        let layout = ''
                        let seatsByScreaning = await GetSeatCodesBySeating()

                        if (seatsByScreaning) {
                            (seatsByScreaning[seating]).forEach(x => {
                                if (availableSeats.includes(x)) {
                                    if (x.includes('20')) x = "[" + successColor(x) + "]" + '\n'; else x = "[" + successColor(x) + "]";
                                    layout = layout + x
                                }
                                else {
                                    if (x.includes('20')) x = "[" + errorColor(x) + "]" + '\n'; else x = "[" + errorColor(x) + "]";
                                    layout = layout + x
                                }
                            })
                        }

                        console.log(layout);


                    }
                    else {
                        console.log(`\n0 seat(s) available in ${seating} area. Try again, with different seating area`);
                    }
                }
            }
        }
    })
    .configureOutput({
        writeOut: (str) => process.stdout.write(`\n${str}`),
        writeErr: (str) => process.stdout.write(`\n[ERR] ${str}`),
        outputError: (str, write) => write(errorColor(`${str}`))
    })
    .addHelpText('after', `

All codes & names: \n
  ${await MovieCodesForHelp()}

  SCREENS
  s1    Screen 1
  s2    Screen 2
  s3    Screen 3

  SHOW-TIMINGS
  1     1:00 PM
  4     4:00 PM
  7     7:00 PM
  10    10:00 PM
`);


program.parse(process.argv);