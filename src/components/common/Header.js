// import libraries to make component
import React from 'react';
import { Text, View } from 'react-native';
//make component

const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

//styling the header
const styles = {
	viewStyle: {
		backgroundColor: '#F6F6F6',						//colour of the box
		justifyContent: 'center',						//center the content on the y axis	====\  Flexbox related
		alignItems: 'center',							//center the content on the x axis  ====/
		height: 60,										//height of the view box
		paddingTop: 1,									//empty space padding above content
		shadowColor: 'black',							//shadow attached to the view box
		shadowOffset: { width: 0, height: 20 },			//offset from the box
		shadowOpacity: 0.2,								//how dark is the shadow
		elevation: 2									//distance 'below' the box
	},
	textStyle: {
		fontSize: 20
	}
};

// make component available to other parts of the app
export { Header };
