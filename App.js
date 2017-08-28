import React from 'react';
import {
	ActivityIndicator,
	Text,
	View,
	Button,
	ListView,
	TextInput,
	StyleSheet,
	Dimensions,
	TouchableHighlight,
	Animated,
	Image,
	NativeModules,
	LayoutAnimation,
	TouchableOpacity,
	Alert,
	AsyncStorage,
  Easing
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

import { StackNavigator, TabNavigator } from 'react-navigation';
import MapView from 'react-native-maps';

import styles from './Style.js';

const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATTITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATTITUDE_DELTA = ASPECT_RATIO


class WelcomeScreen extends React.Component{
	static navigationOptions = {
		title: 'Welcome!',
	};

	constructor () {
  	super()
	  this.spinValue = new Animated.Value(0)
		this.state = {
			isLoading: true
		}
	}

	componentDidMount () {
			this.spin()
		}
		spin () {
  		this.spinValue.setValue(0)
  			Animated.timing(
    			this.spinValue,
    	{
      	toValue: 1,
      	duration: 4000,
      	easing: Easing.linear,
				isLoading: false,
    	}
  	).start(() => this.spin())
	}


		render() {
			const { navigate } = this.props.navigation;


			/*if (this.state.isLoading) {
		      return (
		        <View style={{flex: 1, paddingTop: 20}}>
		          <ActivityIndicator/>
		        </View>
		      );
		  }*/

			const spin = this.spinValue.interpolate({
    		inputRange: [0, 1],
    		outputRange: ['0deg', '360deg']
  		})

	    return (
	      <View>

				<Text style = {styles.capitalLetter}> Welcome to the official Total Solar Eclipse App made by Ava Nederlander!</Text>
				<Text></Text>

				<TouchableHighlight
					style = {styles.submitButton}
					onPress={() => navigate('Info')}>
					<Text style = {styles.submitButtonText}>
							 Informational Information
					</Text>
				</TouchableHighlight>

					<TouchableHighlight
						style = {styles.submitButton}
						onPress={() => navigate('Home')}>
						<Text style = {styles.submitButtonText}>
	               Make a Submission
	          </Text>
					</TouchableHighlight>

					<TouchableHighlight
						style = {styles.submitButton}
						onPress={() => navigate('Geolocations')}>
						<Text style = {styles.submitButtonText}>
	               View your Location
	          </Text>
					</TouchableHighlight>

					<Animated.Image
        		style={{
          		width: 447,
          		height: 400,
          		transform: [{rotate: spin}] }}
          		source={{uri: 'http://orig06.deviantart.net/3121/f/2012/319/b/e/m101_by_solarisse-d5l40b7.png'}}
      		/>

	    	</View>
	    );
	 }
}


class InformationScreen extends React.Component{
	static navigationOptions = {
		title: 'Information',
	};

	constructor(props) {
		super(props);
			this.spinValue = new Animated.Value(0)
	}

	componentDidMount () {
			this.spin()
		}
		spin () {
			this.spinValue.setValue(0)
				Animated.timing(
					this.spinValue,
			{
				toValue: 1,
				duration: 4000,
				easing: Easing.linear,
				isLoading: true,
			}
		).start(() => this.spin())
	}

		render() {
			const { navigate } = this.props.navigation;
			const spin = this.spinValue.interpolate({
    		inputRange: [0, 1],
    		outputRange: ['0deg', '360deg']
  		})

	    return (
	      <View>

				<Text style = {styles.capitalLetter}> The next Total Solar Eclipse in the United States will be in 2024.</Text>
				<Text></Text>
				<Text></Text>
				<TouchableHighlight
					style = {styles.submitButton}
					onPress={() => navigate('Safety')}>
					<Text style = {styles.submitButtonText}>
							 Safety
					</Text>
				</TouchableHighlight>

				<TouchableHighlight
					style = {styles.submitButton}
					onPress={() => navigate('UpcomingSolarEclipsesScreen')}>
					<Text style = {styles.submitButtonText}>
							 Upcoming Solar Eclipses
					</Text>
				</TouchableHighlight>

				<TouchableHighlight
					style = {styles.submitButton}
					onPress={() => navigate('OtherScreen')}>
					<Text style = {styles.submitButtonText}>
							 Other
					</Text>
				</TouchableHighlight>

				<Text></Text>
				<Text></Text>
				<Animated.Image
					style={{
						width: 447,
						height: 200,
						transform: [{rotate: spin}] }}
						source={{uri: 'http://orig06.deviantart.net/3121/f/2012/319/b/e/m101_by_solarisse-d5l40b7.png'}}
				/>
				<Text></Text>
				<Text></Text>
				<Text style = {styles.capitalLetter}> See you soon!</Text>
				<Text></Text>

	    	</View>
	    );
	 }
}

class SafetyScreen extends React.Component{
	static navigationOptions = {
		title: 'Information',
	};

	constructor(props) {
		super(props);
			this.spinValue = new Animated.Value(0)
	}

	componentDidMount () {
			this.spin()
		}
		spin () {
			this.spinValue.setValue(0)
				Animated.timing(
					this.spinValue,
			{
				toValue: 1,
				duration: 4000,
				easing: Easing.linear,
				isLoading: true,
			}
		).start(() => this.spin())
	}

		render() {
			const { navigate } = this.props.navigation;
			const spin = this.spinValue.interpolate({
    		inputRange: [0, 1],
    		outputRange: ['0deg', '360deg']
  		})

	    return (
	      <View>

				<Text style = {styles.capitalLetter}> The next Total Solar Eclipse in the United States will be in 2024.</Text>
				<Text></Text>
				<Text></Text>
				<TouchableHighlight
					style = {styles.submitButton}
					onPress={() => navigate('Geolocations')}>
					<Text style = {styles.submitButtonText}>
							 Safety
					</Text>
				</TouchableHighlight>

				<TouchableHighlight
					style = {styles.submitButton}
					onPress={() => navigate('Geolocations')}>
					<Text style = {styles.submitButtonText}>
							 Upcoming Solar Eclipses
					</Text>
				</TouchableHighlight>

				<TouchableHighlight
					style = {styles.submitButton}
					onPress={() => navigate('Geolocations')}>
					<Text style = {styles.submitButtonText}>
							 Other
					</Text>
				</TouchableHighlight>

				<Text></Text>
				<Text></Text>
				<Animated.Image
					style={{
						width: 447,
						height: 200,
						transform: [{rotate: spin}] }}
						source={{uri: 'http://orig06.deviantart.net/3121/f/2012/319/b/e/m101_by_solarisse-d5l40b7.png'}}
				/>
				<Text></Text>
				<Text></Text>
				<Text style = {styles.capitalLetter}> See you soon!</Text>
				<Text></Text>

	    	</View>
	    );
	 }
}

class UpcomingSolarEclipsesScreen extends React.Component{
	static navigationOptions = {
		title: 'Information',
	};

	constructor(props) {
		super(props);
			this.spinValue = new Animated.Value(0)
	}

	componentDidMount () {
			this.spin()
		}
		spin () {
			this.spinValue.setValue(0)
				Animated.timing(
					this.spinValue,
			{
				toValue: 1,
				duration: 4000,
				easing: Easing.linear,
				isLoading: true,
			}
		).start(() => this.spin())
	}

		render() {
			const { navigate } = this.props.navigation;
			const spin = this.spinValue.interpolate({
    		inputRange: [0, 1],
    		outputRange: ['0deg', '360deg']
  		})

	    return (
	      <View>

				<Text style = {styles.capitalLetter}> The next Total Solar Eclipse in the United States will be in 2024.</Text>
				<Text></Text>
				<Text></Text>
				<TouchableHighlight
					style = {styles.submitButton}
					onPress={() => navigate('Geolocations')}>
					<Text style = {styles.submitButtonText}>
							 Safety
					</Text>
				</TouchableHighlight>

				<TouchableHighlight
					style = {styles.submitButton}
					onPress={() => navigate('Geolocations')}>
					<Text style = {styles.submitButtonText}>
							 Upcoming Solar Eclipses
					</Text>
				</TouchableHighlight>

				<TouchableHighlight
					style = {styles.submitButton}
					onPress={() => navigate('Geolocations')}>
					<Text style = {styles.submitButtonText}>
							 Other
					</Text>
				</TouchableHighlight>

				<Text></Text>
				<Text></Text>
				<Animated.Image
					style={{
						width: 447,
						height: 200,
						transform: [{rotate: spin}] }}
						source={{uri: 'http://orig06.deviantart.net/3121/f/2012/319/b/e/m101_by_solarisse-d5l40b7.png'}}
				/>
				<Text></Text>
				<Text></Text>
				<Text style = {styles.capitalLetter}> See you soon!</Text>
				<Text></Text>

	    	</View>
	    );
	 }
}

class OtherScreen extends React.Component{
	static navigationOptions = {
		title: 'Information',
	};

	constructor(props) {
		super(props);
			this.spinValue = new Animated.Value(0)
	}

	componentDidMount () {
			this.spin()
		}
		spin () {
			this.spinValue.setValue(0)
				Animated.timing(
					this.spinValue,
			{
				toValue: 1,
				duration: 4000,
				easing: Easing.linear,
				isLoading: true,
			}
		).start(() => this.spin())
	}

		render() {
			const { navigate } = this.props.navigation;
			const spin = this.spinValue.interpolate({
    		inputRange: [0, 1],
    		outputRange: ['0deg', '360deg']
  		})

	    return (
	      <View>

				<Text style = {styles.capitalLetter}> The next Total Solar Eclipse in the United States will be in 2024.</Text>
				<Text></Text>
				<Text></Text>
				<TouchableHighlight
					style = {styles.submitButton}
					onPress={() => navigate('Geolocations')}>
					<Text style = {styles.submitButtonText}>
							 Safety
					</Text>
				</TouchableHighlight>

				<TouchableHighlight
					style = {styles.submitButton}
					onPress={() => navigate('Geolocations')}>
					<Text style = {styles.submitButtonText}>
							 Upcoming Solar Eclipses
					</Text>
				</TouchableHighlight>

				<TouchableHighlight
					style = {styles.submitButton}
					onPress={() => navigate('Geolocations')}>
					<Text style = {styles.submitButtonText}>
							 Other
					</Text>
				</TouchableHighlight>

				<Text></Text>
				<Text></Text>
				<Animated.Image
					style={{
						width: 447,
						height: 200,
						transform: [{rotate: spin}] }}
						source={{uri: 'http://orig06.deviantart.net/3121/f/2012/319/b/e/m101_by_solarisse-d5l40b7.png'}}
				/>
				<Text></Text>
				<Text></Text>
				<Text style = {styles.capitalLetter}> See you soon!</Text>
				<Text></Text>

	    	</View>
	    );
	 }
}

class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            location: null,
            time1: null,
            time2: null,
						TextInputLocation: '',
						TextInputTime1: '',
						TextInputTime2: ''
        }
    }

	handleLocation = (text) => {
		this.setState({ location: text })
	}

	handleTime1 = (text) => {
		this.setState({ time1: text })
	}

	handleTime2 = (text) => {
		this.setState({ time2: text })
	}

	static navigationOptions = {
		title: "Submission",
	};

	CheckTextInputIsEmptyOrNot = () =>{

			const { TextInputLocation}  = this.state ;
			const { TextInputTime1 }  = this.state ;
			const { TextInputTime2 }  = this.state ;
			const { navigate } = this.props.navigation;

			if(TextInputLocation == '' || TextInputTime1 == '' || TextInputTime2 == ''){
				Alert.alert("Please Enter All Values.");
			}
			else{
				navigate('Results', {where: this.state.TextInputLocation, when1: this.state.TextInputTime1, when2: this.state.TextInputTime2})
			}
	}

	render() {
		const { navigate } = this.props.navigation;

    return (
      <View>
         <TextInput style = {styles.input}
				 		placeholder = "Your address or location (eg, Nashville, TN)"
				 		placeholderTextColor = "#9a73ef"
				 		onChangeText = {TextInputLocation => this.setState({TextInputLocation})}
				 		value =  {this.state.TextInputLocation}
      	/>

        <TextInput style = {styles.input}
           placeholder = "Contact 2 Time UTC (eg, 17:48:00)"
					 placeholderTextColor = "#9a73ef"
           onChangeText = {TextInputTime1 => this.setState({TextInputTime1})}
           value =  {this.state.TextInputTime1}
        />

        <TextInput style = {styles.input}
           placeholder = "Contact 3 Time UTC (eg, 17:47:00)"
           placeholderTextColor = "#9a73ef"
           onChangeText = {TextInputTime2 => this.setState({TextInputTime2})}
           value =  {this.state.TextInputTime2}
        />

				<Button
					title="Submit"
					onPress={this.CheckTextInputIsEmptyOrNot}
					//fontSize= "50"
				/>


				<TouchableHighlight
					style = {styles.submitButton}
					onPress = { () => this.setState({location: ' ', time1: ' ', time2: ' '})}>
					<Text style = {styles.submitButtonText}>
							 Clear
					</Text>
				</TouchableHighlight>

      </View>
    );
  }
}


class ResultsScreen extends React.Component {

	static navigationOptions = {
		title: 'Submission here',
	};

	constructor(props) {
		super(props);
		this.springValue = new Animated.Value(0.3)
		this.state = {
			c2time: '',
			c3time: '',
			d_est: '',
			d_real: '',
			lat: '',
			location: '',
			long: '',
			percent_diff: '',
			su_est: '',
			su_real: '',
			sun_alt: '',
			isLoading: true
		}
	}


	componentDidMount() {
		const { params } = this.props.navigation.state;
		return fetch('https://brgup-public-001.amnh.org/eclipse/results', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				location: params.where,
				startTime: params.when1,
				endTime: params.when2,
				isLoading: true,
			})
		})
		.then((response) => response.json())
				.then((responseData) => {
					this.setState({
						isLoading: false,
						c2time: responseData.c2time,
		 			 	c3time: responseData.c3time,
		 			 	d_est: responseData.d_est, //estimated distance to the moom
		 			 	d_real: responseData.d_real, //NASA's estimated distance to the moon
		 			 	lat: responseData.lat,
		 			 	location: responseData.location,
		 			 	long: responseData.long,
		 			 	percent_diff: responseData.percent_diff,
		 			 	su_est: responseData.su_est, // yout times estimate
		 			 	su_real: responseData.su_real, //actual value estimate of time
		 			 	sun_alt: responseData.sun_alt //altitude of the sun
					})
   		 	})
	      .catch((error)=> {
					console.error(error);
				})
				Animated.spring(
			    someValue,
			    {
			      toValue: number,
			      friction: number
			    }
			)
	};

	render() {
	const { params } = this.props.navigation.state;

	if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }

	return (
				<View style={{flex: 1, paddingTop: 20}}>
        	<Text style = {styles.capitalLetter}>Your Input:</Text>
        	<Text>Location: {params.where}.</Text>
					<Text>Time 1: {params.when1}.</Text>
					<Text>Time 2: {params.when2}.</Text>
					<Text></Text>
					<Text></Text>
					<Text></Text>
					<Text style = {styles.capitalLetter}>Scientific Results: </Text>
					<Text></Text>
					<Text>

						For {this.state.location}, your latitude and longitude are {this.state.lat}, {this.state.long} degrees.
						The Suns altitude was {this.state.sun_alt} degrees at time {this.state.c2time} UTC.

						The estimated distance to the moon is {this.state.d_est} km, which differs from
						the actual distance at that time ({this.state.d_real} km) by {this.state.percent_diff}%.

						This was estimated from your perceived umbra diameter of {this.state.su_est} km, though the actual
						umbra diameter should have been {this.state.su_real} km.
        	</Text>

					<Text></Text>

					<Text
    				style={{marginBottom: 100}} Spring>
					</Text>

    			<Animated.Image
      			style={{ width: 227, height: 200, transform: [{scale: this.springValue}] }}
      			source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
					/>
				</View>
    );
  }
}


class GeoScreen extends React.Component {
	static navigationOptions = {
		title: 'Geolocation',
	};

	constructor(props){
	    super(props)

	  this.state = {
	    initialPosition: {
	      latitude: 0,
	      longitude: 0,
	      latitudeDelta: 0,
	      longitudeDelta: 0
	    },
	    markerPosition: {
	      latitude: 0,
	      longitude: 0
	    }
	  }
	}

	  watchID: ?number = null

	  componentDidMount(){
	    navigator.geolocation.getCurrentPosition((position) =>{
	      var lat = parseFloat(position.coords.latitude)
	      var long = parseFloat(position.coords.longitude)

	      var initialRegion = {
	        latitude: lat,
	        longitude: long,
	        latitudeDelta: LATTITUDE_DELTA,
	        longitudeDelta: LONGITUDE_DELTA,
	      }
	      this.setState({initialPosition: initialRegion})
	      this.setState({markerPosition: initialRegion})
	    },
	    (error) => alert(JSON.stringify(error)),
	    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})

	    this.watchID = navigator.geolocation.watchPosition((position) => {
	      var lat = parseFloat(position.coords.latitude)
	      var long = parseFloat(position.coords.longitude)

	      var lastRegion = {
	        latitude: lat,
	        longitude: long,
	        longitudeDelta: LONGITUDE_DELTA,
	        latitudeDelta: LATTITUDE_DELTA
	      }

	      this.setState({initialPosition: lastRegion})
	      this.setState({markerPosition: lastRegion})
	    })
	  }
	  componentWillUnmount() {
	    navigator.geolocation.clearWatch(this.watchID)
	  }

	  render() {
	    return (
	    	<View style={styles.container}>
	    		<MapView
	    			style={styles.map}
	    				region={this.state.initialPosition}>

	            <MapView.Marker
	              coordinate={this.state.markerPosition}>
	              <View style={styles.radius}>
								<View style={styles.marker}/>
	              </View>
	            </MapView.Marker>
	          </MapView>
	    	</View>
	    );
	  }

}


	const ResultScreen = TabNavigator({
		Results: { screen: ResultsScreen },
		Geolocations: {screen: GeoScreen}
	});

	const SimpleApp = StackNavigator({
		Welcome: {screen: WelcomeScreen},
		Info: {screen: InformationScreen},
		Home: { screen: HomeScreen },
		Results: { screen: ResultScreen },
		Geolocations: {screen: GeoScreen},
		Safety: {screen: SafetyScreen},
		Upcoming: {screen: UpcomingSolarEclipsesScreen},
		Other: {screen: OtherScreen}
	});


export default SimpleApp;










/**** DO NOT LOOK PAST HERE ***********/


/*latitude to see how fast earth is going

- code was based on earth rotation, not the moon's
- getPast - help figure out the totality and the path away from it by looking at NASA

*/
