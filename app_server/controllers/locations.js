/*GET 'home' page*/
module.exports.homelist = function(req, res){
	res.render('locations-list', {
		title: 'Loc8r - Find a place to work with wifi',
		pageHeader:{
			title: 'Loc8r',
			strapline: 'Find places to work woth wifi near you!',
		},
		sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
		locations: [{
			name: 'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '100m'
		},{
			name: 'Cafe Hero',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 4,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '200m'
		},{
			name: 'Burger Queen',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 2,
			facilities: ['Food', 'Premium wifi'],
			distance: '250m'
		}]
	});
};

/*GET 'Location info' page*/
module.exports.locationsInfo = function(req, res){
	res.render('location-info', {
		title : 'Starcups',
		pageHeader : {title: "Starcups"},
		sidebar: {
			context: 'is on Loc8r because ir has accessible wifi and space to sit down with your laptop and get some work done.',
			callToAction: 'If you\'ve been and you like ir - or if ou don\'t - please leave a review'
		},
		location: {
			name: "Starcups",
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
			coords: {lat: 51.455041, lng: -0.9690884},
			openingTimes: [{
				days: 'Monday - Friday',
				opening: '7:00am',
				closing: '5:00pm',
				closed: false
			},{
				days: 'Saturday',
				opening: '8:00am',
				closing: '5:00pm',
				closed: false
			},{
				days: 'Sunday',
				closed: true
			}],
			reviews: [{
				author: 'Simon Holmes',
				rating: 5,
				timestamp: '16 July 2013',
				reviewText: 'What a great place. I can\'t say enough good things about it.'
				},{
				author: 'Charlie Chaplin',
				rating: 3,
				timestamp: '16 June 2013',
				reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
			}]
		}

	});
};

/*GET 'Add review page'*/
module.exports.addReview = function(req, res){
	res.render('location-review-form', {
		title:'Review Starcups on Loc8r',
		pageHeader: {title: 'Review Starcups'}
	});
};
