const moment = require('moment')

function formatLatestAnnouncement(announcements, stationNames) {
    if (!announcements || !announcements.length)
        return 'Aktuell information saknas'

    announcements.sort((a1, a2) => moment(a2.TimeAtLocation).diff(moment(a1.TimeAtLocation), 'minutes'))
    const a = announcements[0]
    const s = a.TimeAtLocation.substring(11, 16)

    return `Tåg ${a.AdvertisedTrainIdent} mot ${to(a)} ${activity(a)} ${location(a)} ${precision(a)} klockan ${ s}`

    function location() {
        return stationNames ? stationNames[a.LocationSignature] : a.LocationSignature
    }

    function to() {
        return a.ToLocation.map(l => stationNames ? stationNames[l.LocationName] : l.LocationName)
    }
}

function activity(a) {
    return a.ActivityType === 'Ankomst' ? 'ankom till' : 'avgick från'
}

function precision(a) {
    const delay = moment(a.TimeAtLocation).diff(moment(a.AdvertisedTimeAtLocation), 'minutes')

    if (!delay)
        return 'i tid'

    if (delay === 1)
        return 'nästan i tid'

    if (delay < 0)
        return 'i god tid'

    return `${delay} minuter försenat`
}

module.exports = formatLatestAnnouncement
