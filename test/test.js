const expect = require('chai').expect

const formatLatestAnnouncement = require('../formatLatestAnnouncement')
const MatchingTrains = require('../MatchingTrains')

describe('formatLatestAnnouncement', function () {
    it('no activities', function () {
        expect(formatLatestAnnouncement()).to.equal('Aktuell information saknas')
        expect(formatLatestAnnouncement([])).to.equal('Aktuell information saknas')
    })

    const onTime = {
        'ActivityType': 'Avgang',
        'AdvertisedTimeAtLocation': '2016-06-28T22:06:00',
        'AdvertisedTrainIdent': '2868',
        'LocationSignature': 'Sub',
        'ToLocation': [{'LocationName': 'Spå', 'Priority': 1, 'Order': 0}],
        'TimeAtLocation': '2016-06-28T22:06:00'
    }

    const almostOnTime = {
        'ActivityType': 'Ankomst',
        'AdvertisedTimeAtLocation': '2016-06-28T22:19:00',
        'AdvertisedTrainIdent': '2870',
        'LocationSignature': 'Åbe',
        'ToLocation': [{'LocationName': 'Spå', 'Priority': 1, 'Order': 0}],
        'TimeAtLocation': '2016-06-28T22:20:00'
    }

    const delayed = {
        'ActivityType': 'Ankomst',
        'AdvertisedTimeAtLocation': '2016-06-28T21:52:00',
        'AdvertisedTrainIdent': '2769',
        'LocationSignature': 'Åbe',
        'ToLocation': [{'LocationName': 'Söc', 'Priority': 1, 'Order': 0}],
        'TimeAtLocation': '2016-06-28T21:55:00'
    }

    const ahead = {
        'ActivityType': 'Ankomst',
        'AdvertisedTimeAtLocation': '2016-06-28T22:10:00',
        'AdvertisedTrainIdent': '2868',
        'LocationSignature': 'Spå',
        'ToLocation': [{'LocationName': 'Spå', 'Priority': 1, 'Order': 0}],
        'TimeAtLocation': '2016-06-28T22:09:00'
    }

    it('departure on time', function () {
        expect(formatLatestAnnouncement([onTime]))
            .to.match(/Tåg 2868 mot Spå avgick från Sub i tid klockan 22:06/)
    })

    it('departure one minute late', function () {
        expect(formatLatestAnnouncement([almostOnTime]))
            .to.match(/Tåg 2870 mot Spå ankom till Åbe nästan i tid klockan 22:20/)
    })

    it('arrival three minutes late', function () {
        expect(formatLatestAnnouncement([delayed]))
            .to.match(/Tåg 2769 mot Söc ankom till Åbe 3 minuter försenat klockan 21:55/)
    })

    it('early arrival', function () {
        expect(formatLatestAnnouncement([ahead]))
            .to.match(/Tåg 2868 mot Spå ankom till Spå i god tid klockan 22:09/)
    })

    it('sorts', function () {
        expect(formatLatestAnnouncement([ahead, delayed, almostOnTime, onTime]))
            .to.match(/Tåg 2870 mot Spå ankom till Åbe nästan i tid klockan 22:20/)
    })
})
